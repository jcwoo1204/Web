var Links = {
        setColor:function(tag, color) {
        var links = document.querySelectorAll(tag);
        var i = 0;
        while(i < links.length) {
          links[i].style.color = color;
          i = i + 1;
        }
      }
      }
      var Body = {
        setColor:function(color) {
        document.querySelector('body').style.color = color;  
      },
        setBackgroundColor:function(color) {
        document.querySelector('body').style.backgroundColor = color;  
      }
      }
      function NightDayHandler(self) {
        var target = document.querySelector('body')
        if (self.value === 'night'){
          Body.setBackgroundColor('black');
          Body.setColor('white');
          self.value = 'day';

          Links.setColor('a', 'powderblue');

        } else {
            Body.setBackgroundColor('white');
            Body.setColor('black');
            self.value = 'night';

            Links.setColor('a', 'blue');
        }
      }