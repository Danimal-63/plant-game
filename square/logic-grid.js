var map = {
  cols: 16,
  rows: 16,
  tsize: 64,
  layers: [[
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

  ], [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 6, 6, 0, 0,
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 6, 6, 0, 0,
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 7, 6, 0, 0,
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 7, 7, 0, 0,
    0, 0, 5, 5, 0, 0, 5, 0, 0, 5, 5, 0, 7, 7, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 8, 8, 0, 0,
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 8, 8, 0, 0,
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 8, 8, 0, 0,
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 8, 8, 0, 0,
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 8, 8, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

  ]],
  getTile: function (layer, col, row) {
    return this.layers[layer][row * map.cols + col];
  },
  setTile: function (layer, col, row, tile) {
    this.layers[layer][row * map.cols + col] = tile;
  },

  isSolidTileAtXY: function (x, y) {
    var col = Math.floor(x / this.tsize);
    var row = Math.floor(y / this.tsize);

    // tiles 3 and 5 are solid -- the rest are walkable
    // loop through all layers and return TRUE if any tile is solid
    return this.layers.reduce(function (res, layer, index) {
      var tile = this.getTile(index, col, row);
      var isSolid = tile === 3 || tile === 5||  tile === 4|| tile === 6|| tile === 7|| tile === 8;
      return res || isSolid;
    }.bind(this), false);
  },
  getCol: function (x) {
    return Math.floor(x / this.tsize);
  },
  getRow: function (y) {
    return Math.floor(y / this.tsize);
  },
  getX: function (col) {
    return col * this.tsize;
  },
  getY: function (row) {
    return row * this.tsize;
  }
};

function Camera(map, width, height) {
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
  this.maxX = map.cols * map.tsize - width;
  this.maxY = map.rows * map.tsize - height;
}

Camera.prototype.follow = function (sprite) {
  this.following = sprite;
  sprite.screenX = 0;
  sprite.screenY = 0;
};

Camera.prototype.update = function () {
  // assume followed sprite should be placed at the center of the screen
  // whenever possible
  this.following.screenX = this.width / 2;
  this.following.screenY = this.height / 2;

  // make the camera follow the sprite
  this.x = this.following.x - this.width / 2;
  this.y = this.following.y - this.height / 2;
  // clamp values
  this.x = Math.max(0, Math.min(this.x, this.maxX));
  this.y = Math.max(0, Math.min(this.y, this.maxY));

  // in map corners, the sprite cannot be placed in the center of the screen
  // and we have to change its screen coordinates

  // left and right sides
  if (this.following.x < this.width / 2 ||
    this.following.x > this.maxX + this.width / 2) {
      this.following.screenX = this.following.x - this.x;
    }
    // top and bottom sides
    if (this.following.y < this.height / 2 ||
      this.following.y > this.maxY + this.height / 2) {
        this.following.screenY = this.following.y - this.y;
      }
    };

    function Hero(map, x, y) {
      this.map = map;
      this.x = x;
      this.y = y;
      this.score=0;
      this.width = 48;
      this.height = 48;
      this.direction=0;//down is 0, up is 1, right is 2, left is 3
      this.image = Loader.getImage('hero');
    }
    function Hero2(map, x, y) {
      this.map = map;
      this.x = x;
      this.y = y;
      this.score=0;
      this.width = 48;
      this.height = 48;
      this.direction=0;//down is 0, up is 1, right is 2, left is 3
      this.image = Loader.getImage('hero2');
    }

    Hero.SPEED = 256; // pixels per second

    //1 for pot . . . . undecided for rest
    Hero.objectHolding = null;

    Hero.prototype.move = function (delta, dirx, diry) {
      // move hero
      this.x += dirx * Hero.SPEED * delta;
      this.y += diry * Hero.SPEED * delta;

      // check if we walked into a non-walkable tile
      this._collide(dirx, diry);

      //this._pickup(dirx, diry);

      // clamp values
      var maxX = this.map.cols * this.map.tsize;
      var maxY = this.map.rows * this.map.tsize;
      this.x = Math.max(0, Math.min(this.x, maxX));
      this.y = Math.max(0, Math.min(this.y, maxY));
    };
Hero.prototype.drop = function (){
  if (Hero.objectHolding==null){return;}
  if (Game.hero.direction==3){
    heroMapCol = Math.floor(this.x/ map.tsize) - 1;
    heroMapRow = Math.floor(this.y/ map.tsize);
    if (map.getTile (0, heroMapCol, heroMapRow) == 2 && map.getTile(1,heroMapCol,heroMapRow)==0){
      map.setTile (1, heroMapCol, heroMapRow, Hero.objectHolding);
      Hero.objectHolding = null;
    }
  }
  else if (Game.hero.direction==2){
    heroMapCol = Math.floor(this.x/ map.tsize) + 1;
    heroMapRow = Math.floor(this.y/ map.tsize);
    if (map.getTile (0, heroMapCol, heroMapRow) == 2&& map.getTile(1,heroMapCol,heroMapRow)==0){
      map.setTile (1, heroMapCol, heroMapRow, Hero.objectHolding);
      Hero.objectHolding = null;
        }
  }
  else if (Game.hero.direction==1){
    heroMapCol = Math.floor(this.x/ map.tsize);
    heroMapRow = Math.floor(this.y/ map.tsize) - 1;
    if (map.getTile (0, heroMapCol, heroMapRow) == 2&& map.getTile(1,heroMapCol,heroMapRow)==0){
      map.setTile (1, heroMapCol, heroMapRow, Hero.objectHolding);
      Hero.objectHolding = null;
     }
  }
  else if (Game.hero.direction==0){
    heroMapCol = Math.floor(this.x/ map.tsize);
    heroMapRow = Math.floor(this.y/ map.tsize) + 1;
    if (map.getTile (0, heroMapCol, heroMapRow) == 2&& map.getTile(1,heroMapCol,heroMapRow)==0){
      map.setTile (1, heroMapCol, heroMapRow, Hero.objectHolding);
      Hero.objectHolding = null;
        }
  }

}
    Hero.prototype.pickUp = function (){
      if (Hero.objectHolding != null) {return};
      if (Game.hero.direction==3){
        heroMapCol = Math.floor(this.x/ map.tsize) - 1;
        heroMapRow = Math.floor(this.y/ map.tsize);
        if (map.getTile(0,heroMapCol, heroMapRow!=1)&&map.getTile(1,heroMapCol,heroMapRow)==0){
          map.setTile(0,heroMapCol,heroMapRow,1);
          this.score+=100;
          return;
        }
        if (map.getTile (1, heroMapCol, heroMapRow) !=0){
          Hero.objectHolding =map.getTile (1, heroMapCol, heroMapRow);
          map.setTile (1, heroMapCol, heroMapRow, 0);
        }
      }
      else if (Game.hero.direction==2){
        heroMapCol = Math.floor(this.x/ map.tsize) + 1;
        heroMapRow = Math.floor(this.y/ map.tsize);
        if (map.getTile(0,heroMapCol, heroMapRow!=1)&&map.getTile(1,heroMapCol,heroMapRow)==0){
          map.setTile(0,heroMapCol,heroMapRow,1);
          this.score+=100;
          return;
        }
        if (map.getTile (1, heroMapCol, heroMapRow) !=0){
          Hero.objectHolding = map.getTile (1, heroMapCol, heroMapRow);
          map.setTile (1, heroMapCol, heroMapRow, 0);
        }
      }
      else if (Game.hero.direction==1){
        heroMapCol = Math.floor(this.x/ map.tsize);
        heroMapRow = Math.floor(this.y/ map.tsize) - 1;
        if (map.getTile(0,heroMapCol, heroMapRow!=1)&&map.getTile(1,heroMapCol,heroMapRow)==0){
          map.setTile(0,heroMapCol,heroMapRow,1);
          this.score+=100;
          return;
        }
        if (map.getTile (1, heroMapCol, heroMapRow) !=0){
          Hero.objectHolding = map.getTile (1, heroMapCol, heroMapRow);
          map.setTile (1, heroMapCol, heroMapRow, 0);
        }
      }
      else if (Game.hero.direction==0){
        heroMapCol = Math.floor(this.x/ map.tsize);
        heroMapRow = Math.floor(this.y/ map.tsize) + 1;
        if (map.getTile(0,heroMapCol, heroMapRow!=1)&&map.getTile(1,heroMapCol,heroMapRow)==0){
          map.setTile(0,heroMapCol,heroMapRow,1);
          this.score+=100;
          return;
        }
        if (map.getTile (1, heroMapCol, heroMapRow) !=0){
          Hero.objectHolding = map.getTile (1, heroMapCol, heroMapRow);
          map.setTile (1, heroMapCol, heroMapRow, 0);
        }
      }
    }



      Hero.prototype._collide = function (dirx, diry) {
        var row, col;
        // -1 in right and bottom is because image ranges from 0..63
        // and not up to 64
        var left = this.x - this.width / 2;
        var right = this.x + this.width / 2 - 1;
        var top = this.y - this.height / 2;
        var bottom = this.y + this.height / 2 - 1;

        // check for collisions on sprite sides
        var collision =
        this.map.isSolidTileAtXY(left, top) ||
        this.map.isSolidTileAtXY(right, top) ||
        this.map.isSolidTileAtXY(right, bottom) ||
        this.map.isSolidTileAtXY(left, bottom);
        if (!collision) { return; }

        if (diry > 0) {
          row = this.map.getRow(bottom);
          this.y = -this.height / 2 + this.map.getY(row);
        }
        else if (diry < 0) {
          row = this.map.getRow(top);
          this.y = this.height / 2 + this.map.getY(row + 1);
        }
        else if (dirx > 0) {
          col = this.map.getCol(right);
          this.x = -this.width / 2 + this.map.getX(col);
        }
        else if (dirx < 0) {
          col = this.map.getCol(left);
          this.x = this.width / 2 + this.map.getX(col + 1);
        }
      };

      Game.load = function () {
        return [
          Loader.loadImage('tiles', '../assets/tiles.png'),
          Loader.loadImage('hero', '../assets/HeroSheet.png'),
          Loader.loadImage('hero2', '../assets/Hero2.png')
        ];
      };

      Game.init = function () {
        Keyboard.listenForEvents(
          [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN, Keyboard.SPACE,Keyboard.W=87,
          Keyboard.A=65,
          Keyboard.S=83,
          Keyboard.D=68,]);
          this.tileAtlas = Loader.getImage('tiles');

          this.hero = new Hero(map, 100, 100);
          this.hero2 = new Hero2(map,100,100);
          this.camera = new Camera(map, 512, 512);
          this.camera.follow(this.hero);
        };

        Game.update = function (delta) {
          // handle hero movement with arrow keys
          var dirx = 0;
          var diry = 0;
          var dirx2 = 0;
          var diry2 = 0;
          if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1;
          this.hero.direction=3; }
          else if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1;
          this.hero.direction=2;}
          else if (Keyboard.isDown(Keyboard.UP)) { diry = -1;
          this.hero.direction=1;}
          else if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1;
          this.hero.direction=0; }
          if (Keyboard.isDown(Keyboard.A)) { dirx2 = -1;
          this.hero2.direction=3; }
          else if (Keyboard.isDown(Keyboard.D)) { dirx2 = 1;
          this.hero2.direction=2;}
          else if (Keyboard.isDown(Keyboard.W)) { diry2 = -1;
          this.hero2.direction=1;}
          else if (Keyboard.isDown(Keyboard.S)) { diry2 = 1;
          this.hero2.direction=0; }

          if (Keyboard.isDown(Keyboard.SPACE)) {
            if(Hero.objectHolding==null){
            this.hero.pickUp ();
          }else{
            this.hero.drop();
          }
          if(Hero2.objectHolding==null){
            this.hero2.pickUp ();
          }else{
            this.hero2.drop();
          }
          Keyboard._keys[32] = false;
          }

          this.hero.move(delta, dirx, diry);
          this.hero2.move(delta,dirx2,diry2);
          this.camera.update();
        };
        Hero2.SPEED = 256; // pixels per second

        //1 for pot . . . . undecided for rest
        Hero2.objectHolding = null;

        Hero2.prototype.move = function (delta, dirx, diry) {
          // move hero
          this.x += dirx * Hero2.SPEED * delta;
          this.y += diry * Hero2.SPEED * delta;

          // check if we walked into a non-walkable tile
          this._collide(dirx, diry);

          //this._pickup(dirx, diry);

          // clamp values
          var maxX = this.map.cols * this.map.tsize;
          var maxY = this.map.rows * this.map.tsize;
          this.x = Math.max(0, Math.min(this.x, maxX));
          this.y = Math.max(0, Math.min(this.y, maxY));
        };
        Hero2.prototype.drop = function (){
        if (Hero2.objectHolding==null){return;}
        if (Game.hero2.direction==3){
        heroMapCol = Math.floor(this.x/ map.tsize) - 1;
        heroMapRow = Math.floor(this.y/ map.tsize);
        if (map.getTile (0, heroMapCol, heroMapRow) == 2 && map.getTile(1,heroMapCol,heroMapRow)==0){
          map.setTile (1, heroMapCol, heroMapRow, Hero2.objectHolding);
          Hero2.objectHolding = null;
        }
        }
        else if (Game.hero2.direction==2){
        heroMapCol = Math.floor(this.x/ map.tsize) + 1;
        heroMapRow = Math.floor(this.y/ map.tsize);
        if (map.getTile (0, heroMapCol, heroMapRow) == 2&& map.getTile(1,heroMapCol,heroMapRow)==0){
          map.setTile (1, heroMapCol, heroMapRow, Hero2.objectHolding);
          Hero2.objectHolding = null;
            }
        }
        else if (Game.hero2.direction==1){
        heroMapCol = Math.floor(this.x/ map.tsize);
        heroMapRow = Math.floor(this.y/ map.tsize) - 1;
        if (map.getTile (0, heroMapCol, heroMapRow) == 2&& map.getTile(1,heroMapCol,heroMapRow)==0){
          map.setTile (1, heroMapCol, heroMapRow, Hero2.objectHolding);
          Hero2.objectHolding = null;
         }
        }
        else if (Game.hero2.direction==0){
        heroMapCol = Math.floor(this.x/ map.tsize);
        heroMapRow = Math.floor(this.y/ map.tsize) + 1;
        if (map.getTile (0, heroMapCol, heroMapRow) == 2&& map.getTile(1,heroMapCol,heroMapRow)==0){
          map.setTile (1, heroMapCol, heroMapRow, Hero2.objectHolding);
          Hero2.objectHolding = null;
            }
        }

        }
        Hero2.prototype.pickUp = function (){
          if (Hero.objectHolding != null) {return};

          if (Game.hero2.direction==3){
            heroMapCol = Math.floor(this.x/ map.tsize) - 1;
            heroMapRow = Math.floor(this.y/ map.tsize);
            if (map.getTile(0,heroMapCol, heroMapRow!=1)&&map.getTile(1,heroMapCol,heroMapRow)==0){
              map.setTile(0,heroMapCol,heroMapRow,1);
              this.score+=100;
              return;
            }
            if (map.getTile (1, heroMapCol, heroMapRow) !=0){
              Hero2.objectHolding = map.getTile (1, heroMapCol, heroMapRow);
              map.setTile (1, heroMapCol, heroMapRow, 0);
            }
          }
          else if (Game.hero2.direction==2){
            heroMapCol = Math.floor(this.x/ map.tsize) + 1;
            heroMapRow = Math.floor(this.y/ map.tsize);
            if (map.getTile(0,heroMapCol, heroMapRow!=1)&&map.getTile(1,heroMapCol,heroMapRow)==0){
              map.setTile(0,heroMapCol,heroMapRow,1);
              this.score+=100;
              return;
            }
            if (map.getTile (1, heroMapCol, heroMapRow) !=0){
              Hero2.objectHolding = map.getTile (1, heroMapCol, heroMapRow);
              map.setTile (1, heroMapCol, heroMapRow, 0);
            }
          }
          else if (Game.hero2.direction==1){
            heroMapCol = Math.floor(this.x/ map.tsize);
            heroMapRow = Math.floor(this.y/ map.tsize) - 1;
            if (map.getTile(0,heroMapCol, heroMapRow!=1)&&map.getTile(1,heroMapCol,heroMapRow)==0){
              map.setTile(0,heroMapCol,heroMapRow,1);
              this.score+=100;
              return;
            }
            if (map.getTile (1, heroMapCol, heroMapRow) !=0){
              Hero2.objectHolding = map.getTile (1, heroMapCol, heroMapRow);
              map.setTile (1, heroMapCol, heroMapRow, 0);
            }
          }
          else if (Game.hero2.direction==0){
            heroMapCol = Math.floor(this.x/ map.tsize);
            heroMapRow = Math.floor(this.y/ map.tsize) + 1;
            if (map.getTile(0,heroMapCol, heroMapRow!=1)&&map.getTile(1,heroMapCol,heroMapRow)==0){
              map.setTile(0,heroMapCol,heroMapRow,1);
              this.score+=100;
              return;
            }
            if (map.getTile (1, heroMapCol, heroMapRow) !=0){
              Hero2.objectHolding = map.getTile (1, heroMapCol, heroMapRow);
              map.setTile (1, heroMapCol, heroMapRow, 0);
            }
          }
        }



          Hero2.prototype._collide = function (dirx, diry) {
            var row, col;
            // -1 in right and bottom is because image ranges from 0..63
            // and not up to 64
            var left = this.x - this.width / 2;
            var right = this.x + this.width / 2 - 1;
            var top = this.y - this.height / 2;
            var bottom = this.y + this.height / 2 - 1;

            // check for collisions on sprite sides
            var collision =
            this.map.isSolidTileAtXY(left, top) ||
            this.map.isSolidTileAtXY(right, top) ||
            this.map.isSolidTileAtXY(right, bottom) ||
            this.map.isSolidTileAtXY(left, bottom);
            if (!collision) { return; }

            if (diry > 0) {
              row = this.map.getRow(bottom);
              this.y = -this.height / 2 + this.map.getY(row);
            }
            else if (diry < 0) {
              row = this.map.getRow(top);
              this.y = this.height / 2 + this.map.getY(row + 1);
            }
            else if (dirx > 0) {
              col = this.map.getCol(right);
              this.x = -this.width / 2 + this.map.getX(col);
            }
            else if (dirx < 0) {
              col = this.map.getCol(left);
              this.x = this.width / 2 + this.map.getX(col + 1);
            }
          };

        // function isNextToPot(){
        //     if ()
        // }

        Game._drawLayer = function (layer) {
          var startCol = Math.floor(this.camera.x / map.tsize);
          var endCol = startCol + (this.camera.width / map.tsize);
          var startRow = Math.floor(this.camera.y / map.tsize);
          var endRow = startRow + (this.camera.height / map.tsize);
          var offsetX = -this.camera.x + startCol * map.tsize;
          var offsetY = -this.camera.y + startRow * map.tsize;

          for (var c = startCol; c <= endCol; c++) {
            for (var r = startRow; r <= endRow; r++) {
              var tile = map.getTile(layer, c, r);
              var x = (c - startCol) * map.tsize + offsetX;
              var y = (r - startRow) * map.tsize + offsetY;
              if (tile !== 0) { // 0 => empty tile
                this.ctx.drawImage(
                  this.tileAtlas, // image
                  (tile - 1) * map.tsize, // source x
                  0, // source y
                  map.tsize, // source width
                  map.tsize, // source height
                  Math.round(x),  // target x
                  Math.round(y), // target y
                  map.tsize, // target width
                  map.tsize // target height
                );
              }
            }
          }
        };


        Game.render = function () {
          // draw map background layer
          this._drawLayer(0);

          // draw main character
          this.ctx.drawImage(
            this.hero.image,
            (this.hero.direction)*map.tsize,
            0,
            64,
            64,
            this.hero.screenX - this.hero.width / 2,
            this.hero.screenY - this.hero.height / 2,
          this.hero.width,this.hero.height);

          this.ctx.drawImage(
            this.hero2.image,
            (this.hero2.direction)*map.tsize,
            0,
            64,
            64,
            this.hero2.x+ this.hero.screenX -this.hero.x- this.hero2.width / 2,
            this.hero2.y+ this.hero.screenY-this.hero.y-this.hero2.height / 2,
          this.hero2.width,this.hero2.height);

            // draw map top layer
            this._drawLayer(1);

            //this._drawGrid();
          };
