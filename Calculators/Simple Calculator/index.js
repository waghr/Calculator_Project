let screen= document.getElementById('screen')
buttons=document.querySelectorAll('button')
let screenValue='';        /*variable*/
for(item of buttons)
{
	item.addEventListener('click',(e)=>{
	buttonText=e.target.innerText;
	if(buttonText=='C')
	{
		screenValue="";
		screen.value=screenValue;
	}
	else if(buttonText=='=')
	{
		screen.value=eval(screenValue);
	}
	else
	{
		screenValue+=buttonText;
		screen.value=screenValue;
	}
	})
}
