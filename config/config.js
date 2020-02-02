/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: "0.0.0.0", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "0.0.0.0" to listen on any interface
  // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: [], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: "zh-tw", //en, zh-cn.
  timeFormat: 24,
  units: "metric",

  modules: [
    {
      module: "alert",
    },
//    {
//      module: "helloworld",
//      position: "top_center",
//      config: {
//      text: "欢迎来到实验室！"
//    }
//    },

    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "calendar",
      header: "US Holidays",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-check",
            url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
          }
        ]
      }
    },
    {
      module: "compliments",
      position: "lower_third"
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Shenzhen",
        locationID: "1795565",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        appid: "54796ff911bcb605b107d49a1aab7f75"
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        location: "Shenzhen",
        locationID: "1795565",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        appid: "54796ff911bcb605b107d49a1aab7f75"
      }
    },
{
    module: "MMM-kalliope",
    position: "bottom_center",//bottom_center ,upper_third
    config: {
        title: "Voice",
        keep_seconds: "10"
    }
},
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
//            title: "New York Times", 
//            url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
//            title: "Engadget Times",
//            url: "https://cn.engadget.com/rss.xml"   //engadget
            title: "RTHK HK新聞",
            url: "http://rthk9.rthk.hk/rthk/news/rss/c_expressnews_clocal.xml"  //RTHK 本地新聞

          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },
//{
//module: "MMM-EARTH",
//position: "bottom_center",
//config: {
//mode: "Natural",
//rotateInterval: 15000,
//MaxWidth: "50%",
//MaxHeight: "50%",
//}
//},
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
