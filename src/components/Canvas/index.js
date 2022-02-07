import React, { useEffect, useRef } from "react";
import "./index.css";



const Canvas = () => {
    const canvasRef = useRef(null);

    var img = new Image();
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAfCAYAAADqUJ2JAAAAAXNSR0IArs4c6QAAAs9JREFUSEut1V9r01AUAPBciyCa/gstG9urry2jdjV1ugqCVtrFfgAVnZW0SVcqxa4Pe91GxwhY039bO7oPMJDZLV0S0a3dkNUX6ZMM3EcYohKfjNyxyVZvkgnLY7jnd0/OPfcEYOf0gHNyMF3IarXaJUl6c3Bw8K3ZbDYbjUZzb2/vK2pzTchisRDtdlt0uVzXTgbu7+9/EQThLcuyL0++R0JHiORyuTy9u6uq+pum6WeLi4t1XQgirVZLdLvdpzKBQRBhGOZ5uVxe6t3gVEbBYPDO7OxsbmhoCImwLEuXSqWqbo1SqRTLcdxrAADqc9V0Oh3nOK6idcqHQdlsNjEzM5PXQiYnJxNzc3NFvVYB6XQ6Nj8/DxchM8lmsxO5XK5g1G9gZ2fnvd/vv41a2Ol0Wj6fLwDrbAh5PB63JEnvCIJwoBbXarVSNBpljbDDzyFJ0iOKomw2m+0aWDEajSb0sL91GRkZ8QqCIOE4bgEAXOgFFxYWCjRNT2hhpwrc39/vjEQid4vF4jIAwITAeJqmkygMeUXi8fjDQqFQR2GVSuVVLBZ70YtpXlo9rF6vl6vV6vL29vbH46x1xwjDMI95nl9CZaYoyk+KosKyLH+AmOFgYxjmCc/zNdQBKIryg6Ko+7Istw0huFsikXiaz+erGtj3cDgcPBNkt9ut3W730+Dg4FVUn3W73Y4hRBCEZWNjQ/R6vddRiKqqajKZZHQhiMBZPTw87Ne4a3C8THAcV9CEHA6HeX19HSI3tJCpqanU9PR0XvPUnE4n3mg0BJ/PdxOFbG5uiplMJrO7u/tZs4/6+vqurK6urh2Nj3+cra0tMRAIPMAw7Jfm8B8YGLi8srKyRpIkcj4dIREMwxTd4Q/rMj4+/oyiqDGSJG+ZTKaLxwHwzzI6OopEdDvbZrPZKIq6FwqFxnAcvxQKhR6hMjnTXTMar7o/yP8JPrn2D+nWDRt/AJpSAAAAAElFTkSuQmCC";

    
    useEffect(() => {
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];

        const mouse = {
            x: null,
            y: null
        }

        const dist = (x1, x2, y1, y2) => {
            return Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
        }

        class pixel {
    
            constructor (x, y) {
                // this.x = x;
                // this.y = y;
                this.radius = 4;
                this.offsetX = (canvas.width/2) - (img.width * 20/2);
                this.offsetY = (canvas.height/4);
                this.x = x + this.offsetX;
                this.y = y + this.offsetY;
                this.originalX = this.x;
                this.originalY = this.y;
                this.fill = "white";
                this.stayDistance = 150;
                this.speedAway = 4;
                this.speedBack = 1.5;
                this.currentR = 101;
                this.currentG = 254;
                this.currentB = 218;
        
            }
        
            draw () {
                ctx.moveTo(this.x, this.y);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = this.fill;
                ctx.fill();
            }
        
        
            update () {
                let distanceX = this.x - mouse.x;
                let distanceY = this.y - mouse.y;
                let distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
                if(distance <= this.stayDistance){
                    this.x += this.speedAway * (distanceX - distance)/distance;
                    this.y += this.speedAway * (distanceY - distance)/distance;
                } else {
                    let dy = (this.y - this.originalY)
                    let dx = (this.x - this.originalX)
                    if(this.x != this.originalX) {
                        this.x -= this.speedBack * dx/20 ;
                    }
                    if(this.y != this.originalY) {
                        this.y -= this.speedBack * dy/20;
                    }
        
                    let originalDist = Math.sqrt(dx*dx + dy*dy);
                    let tint_factor = 1 - originalDist / this.stayDistance;
                    let newR = this.currentR + (255 - this.currentR) * tint_factor;
                    let newG = this.currentG + (255 - this.currentG) * tint_factor;
                    let newB = this.currentB + (255 - this.currentB) * tint_factor;
                    this.fill =  "rgb("+ newR + ", " + newG + ", " + newB + ")";
        
                    // this.fill = "rgba(101, 254, 218," + (1- originalDist/this.stayDistance) + ")";
        
        
                }
            }
        
        }
    
    
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = "white";
        ctx.drawImage(img, canvas.width/2 - img.width*20, canvas.height/3-img.height*5);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    
        let imageData = ctx.getImageData( canvas.width/2 - img.width*20, canvas.height/3-img.height*5, img.width, img.height);
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        for(var row = 0; row < imageData.height; row++){
            for(var col = 0; col < imageData.width; col++){
                if (imageData.data[(row * 4 * imageData.width) + (col * 4)] > 128) {
                    particles.push(new pixel( col * 20 , row * 20 ))
                }
            }
        }
        for(var i=0; i < particles.length; i++) {
            particles[i].draw();
            drawLines();
        }

        animate();
    
        document.addEventListener("mousemove", (event) => {
            mouse.x = event.pageX;
            mouse.y = event.pageY;
    
        })
      
        function drawLines () {
    
            const minDistance = 40;
    
            for(var i=0; i < particles.length; i++) {
                let x1 = particles[i].x;
                let y1 = particles[i].y;
                for(var j=i+1; j < particles.length; j++){
                    let x2 = particles[j].x;
                    let y2 = particles[j].y;
    
                    let distance = dist(x1, x2, y1, y2);
                    let currentR = 101;
                    let currentG = 254;
                    let currentB = 218;
    
            
                    if(distance <= minDistance) {
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.closePath();
                        let oridist = dist(x1, particles[i].originalX, y1, particles[i].originalY);
                        let tint_factor = 1 - oridist / minDistance;
                        let newR = currentR + (255 - currentR) * tint_factor;
                        let newG = currentG + (255 - currentG) * tint_factor;
                        let newB = currentB + (255 - currentB) * tint_factor;
                        ctx.strokeStyle =  "rgb("+ newR + ", " + newG + ", " + newB + ")";
                        // ctx.strokeStyle =  > 10  ? "rgb(101, 254, 218)" : "rgb(255, 255, 255)";
                        ctx.stroke();
                    }    
                }       
            }
        }
    
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for(var i=0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            drawLines();
            // if(!overCanvas) return;
            requestAnimationFrame(animate);
        }
    
    
    },  []);
    



    return(
        <div className="showcase">
            <canvas ref={canvasRef} />

        </div>

    );
}

export default Canvas;