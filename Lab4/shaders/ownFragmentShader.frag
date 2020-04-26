  

uniform sampler2D texture3;
varying vec2 vUv;

void main() {
	//first lane
	if(vUv. x < 0.25 && vUv. y < 0.25){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25, vUv.y / 0.25 ));
	}
	if(vUv.x > 0.25 && vUv.x < 0.5  && vUv.y < 0.25){
		gl_FragColor = texture2D(texture3, vec2((vUv.x / 0.25) - 1.0, vUv.y / 0.25 ));
	}
	if(vUv.x > 0.5 && vUv.x < 0.75  && vUv.y < 0.25){
		gl_FragColor = texture2D(texture3, vec2((vUv.x / 0.25) - 2.0, vUv.y / 0.25 ));
	}
	if(vUv.x > 0.75 && vUv.y < 0.25){
		gl_FragColor = texture2D(texture3, vec2((vUv.x / 0.25) - 3.0, vUv.y / 0.25 ));
	}
	
	//second lane
	if(vUv. x < 0.25 && vUv. y > 0.25 && vUv.y < 0.5){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25, vUv.y / 0.25 - 1.0 ));
	}
	
	if(vUv. x > 0.25 && vUv.x < 0.5 && vUv. y > 0.25 && vUv.y < 0.5){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25 - 1.0, vUv.y / 0.25 - 1.0 ));
	}
	
	if(vUv. x > 0.5 && vUv.x < 0.75 && vUv. y > 0.25 && vUv.y < 0.5){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25 - 2.0, vUv.y / 0.25 - 1.0 ));
	}
	
	if(vUv. x > 0.75 && vUv. y > 0.25 && vUv.y < 0.5){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25 - 3.0, vUv.y / 0.25 - 1.0 ));
	}
	
	
	//third lane
	if(vUv. x < 0.25 && vUv.y > 0.5 && vUv.y < 0.75){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25, vUv.y / 0.25 - 2.0 ));
	}
	
	if(vUv. x > 0.25 && vUv.x < 0.5 && vUv. y > 0.5 && vUv.y < 0.75){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25 - 1.0, vUv.y / 0.25 - 2.0 ));
	}
	
	if(vUv. x > 0.5 && vUv.x < 0.75 && vUv. y > 0.5 && vUv.y < 0.75){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25 - 2.0, vUv.y / 0.25 - 2.0 ));
	}
	
	if(vUv. x > 0.75 && vUv. y > 0.5 && vUv.y < 0.75){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25 - 3.0, vUv.y / 0.25 - 2.0 ));
	}
	
	
	//fourth lane
	if(vUv. x < 0.25 && vUv.y > 0.75 ){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25, vUv.y / 0.25 - 3.0 ));
	}
	
	if(vUv. x > 0.25 && vUv.x < 0.5 && vUv.y > 0.75){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25 - 1.0, vUv.y / 0.25 - 3.0 ));
	}
	
	if(vUv. x > 0.5 && vUv.x < 0.75 && vUv.y > 0.75){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25 - 2.0, vUv.y / 0.25 - 3.0 ));
	}
	
	if(vUv. x > 0.75 && vUv.y > 0.75){
		gl_FragColor = texture2D(texture3, vec2(vUv.x / 0.25 - 3.0, vUv.y / 0.25 - 3.0 ));
	}
	
	

}