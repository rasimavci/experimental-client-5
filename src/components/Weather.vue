<template>
<div id="weather">
  <div id="setting">
    Choose Location:

    <!-- More location ID can be found here http://woeid.rosselliot.co.nz/lookup -->
    <select v-model="woeid" @change="changeLocation">
      <option value="4118">Toronto</option>
      <option value="3534">Montreal</option>
      <option value="2459115">New York</option>
      <option value="91982014">Ottawa</option>
      <option value="2344116">Istanbul</option>
    </select>
  </div>

  <div v-if="!error" id="display">
    <div id="top">
      <div class="location">{{ location }}</div>
      <div class="time">{{ displayDate }}</div>
      <div class="status">{{ status }}</div>
    </div>

    <div id="left-information">
      <img :src="getThumbnail(status, 64)" :alt="status" class="thumbnail" />
      <div class="temperature">{{ temperature }}</div>
      <div class="unit">°C</div>
    </div>

    <div id="right-information">
      <span>Humidity: {{ humidity }}%</span><br/>
      <span>Pressure: {{ pressure }} mb</span><br/>
      <span>Wind speed: {{ wind }} km/h</span>
    </div>

    <div id="forecast">
      <ul>
        <li v-for="(f, i) in forecast" v-if="i < 8">
          <div>{{ f.day }}</div>
          <img :src="getThumbnail(f.text, 48)" :alt="f.text" />
          <b>{{ f.high }}°</b> {{ f.low }}°
        </li>
      </ul>
    </div>
  </div>

  <div v-else="">Location ID error</div>
</div>
</template>

<script>
export default {
data () {
    return {
    woeid: "91982014",
    location: "",
    status: "",
    time: "",
    temperature: "0",
    humidity: "0",
    wind: "0",
    pressure: "0",
    forecast: [],
    error: false
      }
  },
  mounted () {
    this.changeLocation();
  },
  computed: {
    displayDate: function() {
      // Slice time
      return this.time.slice(0, 16);
    }
  },
  methods: {
    changeLocation: function() {
      // Yahoo weather API https://developer.yahoo.com/weather/
      var api =
        "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%20" +
        this.woeid +
        "%20and%20u%20%3D%20'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
      var self = this;

      // Call API by Axios https://github.com/mzabriskie/axios
      axios
        .get(api)
        .then(function(response) {
          var channel = response.data.query.results.channel;
          if (channel) {
            self.location = channel.location.city + ", " + channel.location.country;
            self.time = channel.item.pubDate;
            self.status = channel.item.condition.text;
            self.temperature = channel.item.condition.temp;
            self.humidity = channel.atmosphere.humidity;
            self.pressure = channel.atmosphere.pressure;
            self.wind = channel.wind.speed;
            self.forecast = channel.item.forecast;
          } else {
            self.error = true;
          }
        })
        .catch(function(error) {
          self.error = true;
        });
    },
    getThumbnail: function(status, size) {
      switch (status.toLowerCase()) {
        case "hot":
            return "https://ssl.gstatic.com/onebox/weather/" + size + "/hot.png";
        case "sunny":
        case "mostly sunny":
            return "https://ssl.gstatic.com/onebox/weather/" + size + "/sunny.png";
        case "thunderstorms":
        case "severe thunderstorms":
            return "https://ssl.gstatic.com/onebox/weather/" + size + "/thunderstorms.png";
        case "scattered thunderstorms":
          return "https://ssl.gstatic.com/onebox/weather/" + size + "/rain_s_cloudy.png";
        case "partly cloudy":
        case "mostly cloudy":
          return "https://ssl.gstatic.com/onebox/weather/" + size + "/partly_cloudy.png";
        case "cloudy":
          return "https://ssl.gstatic.com/onebox/weather/" + size + "/cloudy.png";
        case "showers":
        case "scattered showers":
          return "https://ssl.gstatic.com/onebox/weather/" + size + "/rain_light.png";
        case "rain":
          return "https://ssl.gstatic.com/onebox/weather/" + size + "/rain.png";
        case "snow":
        case "heavy snow":
        case "snow flurries":
        case "blowing snow":
          return "https://ssl.gstatic.com/onebox/weather/" + size + "/snow.png";
        case "sleet":
          return "https://ssl.gstatic.com/onebox/weather/" + size + "/sleet.png";
        case "windy":
          return "https://ssl.gstatic.com/onebox/weather/" + size + "/windy.png";
        default:
          return "https://ssl.gstatic.com/onebox/weather/" + size + "/cloudy.png";
      }
    }
  }
  }
</script>

<style scoped>
#weather {
  overflow: hidden;
  max-width: 632px;
  border: 1px solid black;
  border-radius: 10px;
}

#setting {
  margin: 20px 0;
}

#display {
  padding: 20px 16px 24px 16px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
}

#top {
  margin-bottom: 20px;
}

#top .location {
  font-size: 24px;
  line-height: 1.2;
}

#top .time {
  font-size: 16px;
  line-height: 2;
}

#top .status {
  font-size: 13px;
  line-height: 1.4
}

#left-information {
  color: #212121;
}

#left-information .thumbnail {
  float: left;
  height: 64px;
  width: 64px;
}

#left-information .temperature {
  float: left;
  margin-top: -3px;
  padding-left: 10px;
  font-size: 64px;
}

#left-information .unit {
  float: left;
  margin-top: 6px;
  font-size: 20px;
}

#right-information {
  float: right;
  padding-left: 5px;
  line-height: 22px;
  padding-top: 2px;
  min-width: 43%;
  font-weight: lighter;
}

#forecast {
  padding-top: 10px;
  clear: both;
}

#forecast ul {
  padding: 0;
  margin: 15px 0 5px 0;
}

#forecast ul li {
  display: inline-block;
  height: 90px;
  width: 73px;
  text-align: center;
  line-height: 1;
}
</style>
