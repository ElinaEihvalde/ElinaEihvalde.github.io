'use strict';




 Vue.component('grid-display', {
    template: `
    <div id="indexPage"><div class="work" v-for = "post in posts" :class = "post.class"> 
      <a  :href="post.link">
      <div class="overlay"></div>
      <div class="some"><img :src= "post.picture" width="100%"></div>
      <div class="description">
          <h3>{{post.title}}</h3>
          <p>{{post.description}}</p>
      </div>
  </a>
      </div>
      </div>`
    , 
    data: function () {
        return {
           
            posts: [
                {
                id: 1,
                
                link: 'work_karneval.html',
                picture: './images/karneval.jpg.png',
                title: 'Aalborg Karneval',
                description: 'Web app prototype'
    
            },
            {
                id: 2,
                link: 'work_100UI.html',
                picture: './images/daily.png',
                title: 'House of dance',
                description: 'Coming soon'
    
            },
    
            {
                id: 3,
                class : 'row' ,
                link: 'work_wicked.html',
                picture: './images/wicked_index.png',
                title: 'Carbon footprint challenge',
                description: 'Concept and app design'
    
            },
    
            {
                id: 4 ,
                class : 'two' ,
                link: 'work_slovak.html',
                picture: './images/slovak_index.png',
                title: '#SLOVAKFOLKLORE',
                description: 'Responsive website prototype'
    
            },

    
    
            
    
        ]
        }
    }

});
 
//Root Instance
new Vue({
    el: '#app',
    data: {
       
    }
})
