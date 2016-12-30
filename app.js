    const secondHand = document.querySelector('.second-hand'); //returns 1st element with class secondhand
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds(); //get seconds method on date object
      const mins = now.getMinutes();
      const hours = now.getHours();

      const secondsDegrees = ((seconds/60)*360)+90; //convert seconds to degrees and offset default line61
      const minutesDegrees = ((mins*6)+90);
      const hoursDegrees = ((hours*30)+90);

      secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //use backtick for template strings/literals
      //expression in curly braces gets passed to function


      minHand.style.transform = `rotate(${minutesDegrees}deg)`;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      //console.log(seconds);
      console.log(mins);
      console.log(hours);
    }
    setInterval(setDate, 1000);