  Vue.component('brandon', {
      template: '<p>Hey my name is brandon</p>'
  })
  
  
  new Vue({
  el: '#app',
  data: {
    conference: '',
    name: '',
    speaker: '',
    youtube: ''

  },
  methods: {
    buttonClick: function(){
        alert('I was not clicked');
    },
    getVideo: function(){
        var app = this;
        var config = {
         headers: {'Authorization': 'Bearer key5mrICibmeTv27E'}
    };
        axios.get('https://api.airtable.com/v0/app6WxXGUt1SeRU0a/Talks/recoBKYcrTMf3OwEU/', config)
        .then(function(response){
        app.conference = response.data.fields.Conference;
        app.name = response.data.fields.Name;
        app.speaker = response.data.fields.Speaker;
        app.youtube = response.data.fields.youtube;
        
  });

    }
  }
})

// console.log(response.data.fields.Conference); 
  //          console.log(response.data.fields.Speaker);
   //         console.log(response.data.fields.Name);
     //       console.log(response.data.fields.youtube);