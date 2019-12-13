const compo = {
	div(id){
		const div = document.createElement('div')
		div.setAttribute('id', id)
		div.setAttribute('style', 'border : 1px solid black')
		//div.textContent =text
		return div
	},
	inputText(id, type){
		const input = document.createElement('input')
		input.setAttribute('id', id)
		input.setAttribute('type', type)

		return input
	},
	inputButton(id, type, val){
		const input = document.createElement('input')
		input.setAttribute('id', id)
		input.setAttribute('type', type)
		input.setAttribute('value', val)

		return input
	},
	br(){
		const br = document.createElement('br')
		return br
	}
}

function Div(){
	this.make = function(){
		
	}
}
function InputText(){
	this.make = function(){

		
	}
}
function InputButton(){
	this.make = function(){
		
	}
}
function Br(){
	this.make = function(){
		
	}
}
/* function Func02(){
	this.play = function(){
		if(input == undefined || input == null || input == ''){
			alert('텍스트 필드를 입력하세요.')
		}else{
			alert((input.value !== '') ? input.value : '먼저 입력하시오') 
			input.focus()
		}
		choice.value = 0
	}
}
function Factory(type){
	switch(type){
		case 'inputText' : return new InputText()
		case 'inputButton' : return new InputButton()
		case 'br' : return new Br()
		case 'div' : return new Div()
		}
} */