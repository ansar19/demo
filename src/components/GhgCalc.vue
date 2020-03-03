<template>
    <d-card class="card-small mb-3" id="calcResult">
        <d-card-header class="border-bottom">
            <h6 class="card-title">{{ghgcalcmethodtitle}}</h6>
        </d-card-header>
        <d-card-body>
            <d-form>
                <!-- ghg part -->
                <div class="form-group">
                    <label class="form-label">Объем потребления топлива, М, тонн:</label>
                    <d-input v-model.number="input.fuelUsed" type="number" v-bind:precision="2" class="mb-2" />
                </div>
                <div class="form-group">
                    <label class="form-label">Техническое состояния автомобиля (П):</label>
                    <d-form-select v-model="vehiclecondition" :options="vehicleconditionoptions" />
                </div>
                <div class="form-group">
                    <label class="form-label">Годы эксплуатации (R):</label>
                    <d-form-select v-model="yearsused" :options="yearsusedoptions" />
                </div>
                <div class="form-group">
                    <label class="form-label">Удельный Коэффициент выбросов СО2:</label>
                    <d-form-select v-model="emissionfactorco2" :options="emissionfactorco2options"
                        @input="emissionFactorco2Select" />
                </div>
                <div class="form-group">
                    <label class="form-label">Коэффициенты выбросов N2O и CH4 по умолчанию для дорожного
                        транспорта:</label>
                    <v-select v-model="selectedch4n2o" :options="optionsch4n2o" label="title">
                        <template slot="option" slot-scope="option">
                            {{ option.title }}
                        </template>
                    </v-select>
                </div>
                <div class="form-group">
                    <label class="form-label">Тип автотранспорта:</label>
                    <d-form-select v-model="vehicletype" :options="vehicletypeoptions" />
                </div>
                <div id="exportContent">
                    <template v-if="vehicletype">
                        <div class="mb-2">
                            <label>Выбранные параметры:</label>
                            <table class="meta-table">
                                <thead>
                                    <tr>
                                        <th>Объем потребления топлива, тыс.тонн</th>
                                        <th>Техническое состояния автомобиля (П)</th>
                                        <th>Годы эксплуатации (R)</th>
                                        <th>Удельный Коэффициент выбросов СО2 т/ТДж</th>
                                        <th>Выбранный коэффициент выбросов N2O по умолчанию для дорожного транспорта
                                        </th>
                                        <th>Выбранный коэффициент выбросов CH4 по умолчанию для дорожного транспорта
                                        </th>
                                        <th>Переводные множители для расчета выбросов СО2</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td data-label="Объем потребления топлива, тыс.тонн:">{{ fuelUsedThousand }}</td>
                                    <td data-label="Техническое состояния автомобиля (П):">{{ yearsused }}</td>
                                    <td data-label="Годы эксплуатации (R):">{{ yearsused }}</td>
                                    <td data-label="Удельный Коэффициент выбросов СО2 т/ТДж:">{{ emissionfactorco2 }}
                                    </td>
                                    <td
                                        data-label="Выбранный коэффициент выбросов N2O по умолчанию для дорожного транспорта:">
                                        {{ selectedch4n2o.n2odefault }}</td>
                                    <td
                                        data-label="Выбранный коэффициент выбросов CH4 по умолчанию для дорожного транспорта:">
                                        {{ selectedch4n2o.ch4default }}</td>
                                    <td data-label="Переводные множители для расчета выбросов СО2:">{{ vehicletype }}
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="mb-2">
                            <label>Результат расчета:</label>
                            <table class="meta-table">
                                <thead>
                                    <tr>
                                        <th>Объем выбросов CO2 (оксид углерода), тонн</th>
                                        <th>Объем выбросов N2O (закись азота), тонн </th>
                                        <th>Объем выбросов CH4 (метан), тонн</th>
                                        <th>Объем выбросов ПГ в CO2 эквив., тонн </th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td data-label="Объем выбросов CO2 (оксид углерода), тонн:">{{ co2emission }}</td>
                                    <td data-label="Объем выбросов N2O (закись азота), тонн:">{{ no2emission }}</td>
                                    <td data-label="Объем выбросов CH4 (метан), тонн:">{{ ch4emission }}</td>
                                    <td data-label="Объем выбросов ПГ в CO2 эквив., тонн:">{{ co2equivemission }}</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <d-button outline size="sm" @click.prevent="export2Doc('exportContent');">
                                Сохранить как .doc
                            </d-button>
                        </div>
                    </template>

                    <template v-else>
                        <label>Введите необходимые поля для отображения результатов расчета</label>
                    </template>
                </div>
                <!-- end of ghg part -->
            </d-form>
        </d-card-body>
    </d-card>
</template>

<script>
/* eslint-disable */

export default {
  name: 'ghg-calc',
  data() {
    return {
      releaseSources: [],
      selectedReleaseSource: {},
      ghgcalcmethodtitle: 'МЕТОДИЧЕСКИЕ УКАЗАНИЯ ПО РАСЧЕТУ ВЫБРОСОВ ПАРНИКОВЫХ ГАЗОВ ОТ ПРЕДПРИЯТИЙ АВТОТРАНСПОРТА',
      selectedch4n2o: {},
      optionsch4n2o: [{
          title: 'Автомобильный бензин - неконтролируемые',
          ch4default: 33,
          n2odefault: 3.2,
        },
        {
          title: 'Автомобильный бензин – катализатор окисления',
          ch4default: 25,
          n2odefault: 8,
        },
        {
          title: 'Грузовой транспорт с малым пробегом, производства 1995 года или позже',
          ch4default: 3.8,
          n2odefault: 5.7,
        },
        {
          title: 'Бензин / Дизтопливо',
          ch4default: 3.9,
          n2odefault: 3.9,
        },
        {
          title: 'Природный газ',
          ch4default: 92,
          n2odefault: 3,
        }
      ],
      vehiclecondition: null,
      vehicleconditionoptions: [{
          value: null,
          text: 'Пожалуйста, выберите вариант'
        },
        {
          value: 1.0,
          text: 'Отличное'
        },
        {
          value: 1.05,
          text: 'Хорошее'
        },
        {
          value: 1.1,
          text: 'Удовлетворительное'
        },
      ],
      yearsused: null,
      yearsusedoptions: [{
          value: null,
          text: 'Пожалуйста, выберите вариант'
        },
        {
          value: 1,
          text: '0'
        },
        {
          value: 1.05,
          text: 'до 5 лет'
        },
        {
          value: 1.1,
          text: 'до 10 лет'
        },
        {
          value: 1.15,
          text: 'до 15 лет'
        },
        {
          value: 1.2,
          text: 'до 20 лет'
        },
      ],
      vehicletype: null,
      vehicletypeoptions: [{
          value: null,
          text: 'Пожалуйста, выберите вариант'
        },
        {
          value: 42.5,
          text: 'Транспорт на дизельном топливе'
        },
        {
          value: 43.97,
          text: 'Транспорт на бензине'
        },
        {
          value: 40.19,
          text: 'масла отработанные'
        },
        {
          value: 47.31,
          text: 'пропан и бутан сжиженные'
        },
      ],
      emissionfactorco2: null,
      emissionfactorco2options: [{
          value: null,
          text: 'Пожалуйста, выберите вариант'
        },
        {
          value: 74.1,
          text: 'Дизельный автотранспорт'
        },
        {
          value: 69.30,
          text: 'Автотранспорт на бензине'
        },
      ],
      input: {
        fuelUsed: 0,
      },
    }
  },
  watch: {
    boxes(value) {
      this.$emit('boxes-changed', value);
    }
  },
  methods: {
    emissionFactorco2Select(pld) {
      if(pld === 74.1) {
        this.selectedch4n2o = this.optionsch4n2o[3];
        this.vehicletype = 42.5;
      } else if (pld === 69.30) {
        this.selectedch4n2o = this.optionsch4n2o[3];
        this.vehicletype = 43.97;
      }
    },
    export2Doc (element, filename = '') {
      var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>"
      var postHtml = '</body></html>'
      var html = preHtml + document.getElementById(element).innerHTML + postHtml

      var blob = new Blob(['\ufeff', html], {
        type: 'application/msword',
      })

      // Specify link url
      var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html)

      // Specify file name
      filename = filename ? filename + '.doc' : 'document.doc'

      // Create download link element
      var downloadLink = document.createElement('a')

      document.body.appendChild(downloadLink)

      if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename)
      } else {
        // Create a link to the file
        downloadLink.href = url

        // Setting the file name
        downloadLink.download = filename

        // triggering the function
        downloadLink.click()
      }

      document.body.removeChild(downloadLink)
    },
  },
  computed: {
    fuelUsedThousand() {
      return (this.input.fuelUsed / 1000).toFixed(4);
    },
    co2emission() {
      return (this.fuelUsedThousand * this.vehicletype * this.emissionfactorco2).toFixed(4);
    },
    no2emission() {
      return ((this.fuelUsedThousand * this.vehicletype * this.selectedch4n2o.n2odefault) / 1000 * this.vehiclecondition * this.yearsused).toFixed(4);
    },
    ch4emission() {
      return ((this.fuelUsedThousand * this.vehicletype * this.selectedch4n2o.ch4default) / 1000 * this.vehiclecondition * this.yearsused).toFixed(4);
    },
    co2equivemission() {
      return (Number(this.co2emission) + Number(this.no2emission) * 310 + Number(this.ch4emission) * 21).toFixed(4);
    },
  },
}
</script>