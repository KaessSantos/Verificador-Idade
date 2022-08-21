function verificar(){
  let data = new Date()
  let ano = data.getFullYear()
  let num = document.querySelector('#txtn')
  let res = document.querySelector('#res')


  if(num.value.length == 0 || Number(num.value) > ano) {
    alert('Valor inválido')
  }else {
      let sex = document.getElementsByName('radsex')
      let idade = ano - Number(num.value)
      let genero = ''
      let img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (sex[0].checked) {
        genero = 'Homem'
        if (idade > 0 && idade <= 12) {
          res.innerHTML = `<p>É ${genero} com ${idade} anos.</p>`
          res.style.textAlign = 'center'
          img.setAttribute('src', 'img/criancaM.jpg.png')
          img.style.borderRadius = '50%'
          img.style.width = '200px'
          res.appendChild(img)
          res.innerHTML += 'Criança'
        }else if (idade > 12 && idade <= 22) {
          res.innerHTML = `<p>É ${genero} com ${idade} anos.</p>`
          res.style.textAlign = 'center'
          img.setAttribute('src', 'img/jovemM.jpg.png')
          img.style.borderRadius = '50%'
          img.style.width = '200px'
          res.appendChild(img)
          res.innerHTML += 'Jovem'
        }else if (idade > 22 && idade <= 60) {
          res.innerHTML = `<p>É ${genero} com ${idade} anos.</p>`
          res.style.textAlign = 'center'
          img.setAttribute('src', 'img/adultoM.jpg.png')
          img.style.borderRadius = '50%'
          img.style.width = '200px'
          res.appendChild(img)
          res.innerHTML += 'Adulto'
        }else {
          res.innerHTML = `<p>É ${genero} com ${idade} anos.</p>`
          res.style.textAlign = 'center'
          img.setAttribute('src', 'img/idosoM.jpg.png')
          img.style.borderRadius = '50%'
          img.style.width = '200px'
          res.appendChild(img)
          res.innerHTML += 'Idoso'
        }

      }else {
        genero = 'Mulher'
        if (idade > 0 && idade <= 12) {
          res.innerHTML = `<p>É ${genero} com ${idade} anos.</p>`
          res.style.textAlign = 'center'
          img.setAttribute('src', 'img/criancaF.jpg.png')
          img.style.borderRadius = '50%'
          img.style.width = '200px'
          res.appendChild(img)
          res.innerHTML += 'Criança'
        }else if (idade > 12 && idade <= 22) {
          res.innerHTML = `<p>É ${genero} com ${idade} anos.</p>`
          res.style.textAlign = 'center'
          img.setAttribute('src', 'img/jovemF.jpg.png')
          img.style.borderRadius = '50%'
          img.style.width = '200px'
          res.appendChild(img)
          res.innerHTML += 'Jovem'
        }else if (idade > 22 && idade <= 60) {
          res.innerHTML = `<p>É ${genero} com ${idade} anos.</p>`
          res.style.textAlign = 'center'
          img.setAttribute('src', 'img/adultoF.jpg.png')
          img.style.borderRadius = '50%'
          img.style.width = '200px'
          res.appendChild(img)
          res.innerHTML += 'Adulto'
        }else {
          res.innerHTML = `<p>É ${genero} com ${idade} anos.</p>`
          res.style.textAlign = 'center'
          img.setAttribute('src', 'img/idosoF.jpg.png')
          img.style.borderRadius = '50%'
          img.style.width = '200px'
          res.appendChild(img)
          res.innerHTML += 'Idoso'
        }

      }
      num.value = ''
      num.focus()
  }

}
