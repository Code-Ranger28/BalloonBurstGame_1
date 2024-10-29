import Phaser from 'phaser';
import React, {useEffect , useRef} from 'react';
import balloonImg1 from '../assets/Green_balloon.png';
import balloonImg2 from '../assets/Purple_balloon.png';
import balloonImg3 from '../assets/Red_balloon.png';
import balloonImg4 from '../assets/Orange_balloon.png';
import pumpImg from '../assets/Pump.png';

const BalloonGame = () => {
    const gameRef = useRef(null);
    
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width : 1000,
            height : 600,
            parent : gameRef.current,
            physics : {
                default : 'arcade',
            },
            scene : {preload , create , update},
        };
        const game = new Phaser.Game(config);

        function preload() {
            this.load.image('balloon', balloonImg1);
            this.load.image('balloon', balloonImg2);
            this.load.image('balloon',balloonImg3);
            this.load.image('balloon',balloonImg4);
            this.load.image('pump', pumpImg);
        }

        let balloon;
        let inflateTimer;

    function create() {
      balloon = this.physics.add.sprite(400, 300, 'balloon').setInteractive();
      balloon.setScale(0.1); 

      const pumpButton = this.add.text(350, 550, 'Pump Air', { fontSize: '32px', fill: '#fff' })
        .setInteractive()
        .on('pointerdown', () => pumpBalloon.call(this));

      balloon.on('pointerdown', () => {
        balloon.destroy();
        this.add.text(300, 250, 'Balloon Burst!', { fontSize: '32px', fill: '#ff0000' });
      });
    }

    function pumpBalloon() {
      if (!inflateTimer) {
        inflateTimer = this.time.addEvent({
          delay: 100,
          loop: true,
          callback: () => {
            if (balloon.scaleX < 1) {
              balloon.setScale(balloon.scaleX + 0.05); 
            } else {
              balloon.setVelocity(
                Phaser.Math.Between(-200, 200),
                Phaser.Math.Between(-200, 200)
              );
              inflateTimer.remove();
            }
          },
        });
      }
    }


        function update() {}

        return () => {
            game.destroy(true);
        };
    }, []);
    return <div ref={gameRef}></div>;
};

export default BalloonGame;