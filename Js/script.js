let colorToGenerate=document.querySelector('.color');
let btnToGenerate=document.querySelector('.btn');

btnToGenerate.addEventListener('click',()=>
{
  const colorGet=colorGenerator();
});

function colorGenerator()
{
  const randomNo= Math.random();
  //To get Hex-Code (16)
  const randomHexCode=Math.floor(randomNo* 16777215); // Only Integer Part
  const hexCode="#"+ randomHexCode.toString(16);
  const colorGet=hexCode;
  document.body.style.backgroundColor=colorGet;
  btnToGenerate.style.backgroundColor=colorGet;
  colorToGenerate.style.color=colorGet;
  colorToGenerate.innerHTML= colorGet;

  // Copying the generated Color to our clipboard
  navigator.clipboard.writeText(colorGet);

}

colorGenerator();