function validation (elForm , elements ,lang)
{
  // email
  /*
[
{
elID:'emailinput',
name:'email'
required : true,
email :true,
confirm: '#confirminput',
lang:'tr',
range : true,
minLength : 2,
maxLength :10
},
{
elName:'emailinput',

}

]
  */
  //$(el).children()
  var validate = false
  //var style = '<small class="text-danger">'+ message+ ' </strong> </small>'
  var regex =  /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
  //var tempEl =''
  var message = ''
    elements.forEach(function(item , index){
      var tempEl = $('#' + elForm).find('#' + item.elID)


      //console.log(tempEl)
      if(lang == 'tr')
      {
      if(item.required && tempEl.val())
      {
         message = item.name + ' boş geçilemez !'
        tempEl.parent().append('<small class="text-danger">'+ message+ ' </strong> </small>')
        //console.log(tempEl.parent())
      }
      else if(item.email && !regex.test( tempEl.val() ))
      {
        message = item.name + ' alanı geçerli değil !'
        tempEl.parent().append(style)
      }
      else if(item.range)
      {
          if(tempEl.val().length > item.minLength && tempEl.val().length < item.maxLength)
          {
            message = item.name + ' alanı ' + item.minLength + ' ile ' + item.maxLength +' karakter arasında olmalıdır !'
            tempEl.parent().append(style)
          }
      }
      else if(item.confirm)
      {
        if(tempEl.val() != $('#' + item.confirm).val())
        {
          message =  ' Alanlar uyuşmuyor !'
          tempEl.parent().append(style)
        }
      }
      else {
        validate =true
      }
      }
      else if(lang == 'en')
      {
        if(item.required && !tempEl.val())
        {
          message = item.name + ' required !'
          tempEl.parent().append(style)
        }
        else if(item.email && !regex.test( tempEl.val() ))
        {
          message = item.name + ' field is invalid !'
          tempEl.parent().append(style)
        }
        else if(item.range)
        {
            if(tempEl.val().length < item.minLength || tempEl.val().length > item.maxLength)
            {
              message = item.name + ' field ' + item.minLength + ' with ' + item.maxLength +' must be  between character !'
              tempEl.parent().append(style)
            }
        }
        else if(item.confirm)
        {
          if(tempEl.val() != $('#' + item.confirm).val())
          {
            message =  ' fields do not match !'
            tempEl.parent().append(style)
          }
        }
        else {
          validate =true
        }

      }
    })

return validate

}
