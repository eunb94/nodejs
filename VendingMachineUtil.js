 util = {
	forTest(arr){
		let returnVal = []
		for(let i=0; i<arr.length; i++){
			if(arr[i] % 2 == 0){
			returnVal.push(arr[i])
			}
		}
		return returnVal
	},
	forEachTest(){
		let returnVal = []
		arr.forEach( i => {if(i % 2 == 0) returnVal.push(i)})
		return returnVal
	},
	mapTest(){
	return arr.map( i => i * 100)
	},
	findTest(){
	return arr.find(i=>i>5)
	},
	findTest2(){
	let resultVal = (arr.find(i => i.id == id))
	alert(`결과 : ${resultVal}`)
	return (resultVal == undefined) ? '찾는 ID가 없습니다'
									: resultVal.name			
	},
	reduceTest(){
	return arr.reduce((i, j) => i+j)
	},
	filterTest(){
	return arr.filter( i => ( i % 2 == 0))
	},
	ofTest(){
	 let temp =[]
      for (const item of arr){
         temp.push(item.name)
      }
      return temp
	},
	fromTest(){
	return Array.from(arr,i => i + i)
	}

	
}
 
function Looping(){
	// 포장마차 리필
	// for fortest
	// forEach
	// map*
	// find*
	// reduce*
	// filter*
	this.forTest = function(arr){
	
	}
	this.forEachTest = function(arr){
		
	}
	this.mapTest = function(arr){              
		
	}
	this.findTest = function(arr){
		
	}
	this.findTest2 = function(arr, id){
		
	}
	this.reduceTest = function(arr){
		
	}
	this.filterTest = function(arr){
		
	}
	this.ofTest= function(arr){
     
   }
   	this.fromTest = function(arr){
		
   }
    this.argumentsTest = function(){
		return [...arguments]
	  }
	this.joinTest = function(){
		return [...arguments].join("\n")
	}
	this.sortTest = function(){
		let t1=[...arguments].sort()
		let t2=[...t1].reverse()
		return [...t1, ...t2]
	}
	this.reverseTest = function(){
		return [...[...arguments].sort].reverse()
	}
	this.todos = function(arr){
		const todos = arr;

		// 비교 함수
		function compare(key) {
		return function (a, b) {
			// 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면
			//NaN이 나오므로 비교 연산을 사용한다.
			return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
		};
		}

		// id를 기준으로 정렬
		resultVal = todos.sort(compare('id'));
		console.log(resultVal);

		// content를 기준으로 정렬
		arr = todos.sort(compare('content'));
		let temp = []
		for(const item of arr){
			temp.push(item.content)
		}
		return temp
	}
	
}
function Util(){
	this.empty = function(){
		elem = [...arguments]
		var e = document.querySelector(elem); 
        
        //e.firstElementChild can be used. 
        var child = e.lastElementChild;  
        while (child) { 
            e.removeChild(child); 
            child = e.lastElementChild; 
        } 
	}
}
