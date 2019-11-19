/**
*Tile and Object list
Tiles: cannot be picked up
1: Stone walkway - can be walked on cannot have objects placed on, cannot be sold
2: Dirt - can be walked on, can have object placed on, can be sold
9: Sell Table - cannot be walked on or sold, if a tree in its final stage of growth is placed here, earn a reward
Objects: Can be picked up,  not walked on
8: GreenPlantStage0 - Green plant seed, if placed on pot, will grow to stage1
4: GreenPlantStage1 - bush - If mulch or watering can placed on this, will grow to stage2
3: GreenPlantStage2: - tree - Final stage of GreenPlant growth, can be sold
10: RedPlantStage0 - Red plant seed, if placed on pot, will grow to stage1
11: RedPlantStage1 - stump - if watered, proceed to stage2
12: RedPlantStage2 - bush - if mulched, proceed to stage3
13: RedPlantStage3 - tree - Final syahe of RedPlant growth, can be sold
14: BluePlantStage0 - Blue plant stage - if placed on pot, will grow to stage1
15: BluePlantStage1 - stump - if mulched, proceed to syage2
16: BluePlantStage2 - bush - if wayered, proveed to stage3
17: BluePlantSyahe3 - tree - Final stage of BluePlant growth, can be sold
5:Pot - can have seeds placed on
6:Watering Can - boosts certain plant's growth stages
7:Mulch Bag - boosts certain plant's growth stages
*/
var map = {
  cols: 16,
  rows: 16,
  tsize: 64,
  layers: [[
    9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
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
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 14, 14, 0, 0,
    0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 10, 10, 0, 0,
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
      var isSolid = tile === 3 || tile === 5||  tile === 4|| tile === 6|| tile === 7|| tile === 8||tile === 9 || tile === 10||  tile === 11|| tile === 12|| tile === 13|| tile === 14||tile === 15 || tile === 16||  tile === 17;
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
    Hero.prototype.pickUp = function (){
      if (this.objectHolding != null) {return;}
      //determine which way hero is facing
      else if (Game.hero.direction==3){
        heroMapCol = Math.floor(this.x/ map.tsize) - 1;
        heroMapRow = Math.floor(this.y/ map.tsize);
      }else if (Game.hero.direction==2){
        heroMapCol = Math.floor(this.x/ map.tsize) + 1;
        heroMapRow = Math.floor(this.y/ map.tsize);
      }else if (Game.hero.direction==1){
        heroMapCol = Math.floor(this.x/ map.tsize);
        heroMapRow = Math.floor(this.y/ map.tsize) - 1
      }else if (Game.hero.direction==0){
        heroMapCol = Math.floor(this.x/ map.tsize);
        heroMapRow = Math.floor(this.y/ map.tsize) + 1;
      }
      var tileGot = map.getTile(1,heroMapCol,heroMapRow);
      //if there is nothing to pick up and there is a dirt block, sell it
      if (map.getTile(0,heroMapCol, heroMapRow)!=9&&map.getTile(0,heroMapCol, heroMapRow!=1)&&tileGot==0){
        map.setTile(0,heroMapCol,heroMapRow,1);
        this.score+=100;
        return;
      }
      //pick up the object on the tile if available
      else if (map.getTile (1, heroMapCol, heroMapRow) !=0){
        this.objectHolding = map.getTile (1, heroMapCol, heroMapRow);
        map.setTile (1, heroMapCol, heroMapRow, 0);
        return;
      }
    }
    Hero.prototype.drop = function (){
      if (this.objectHolding==null){return;}
      //the else if ladder is determining which way hero is facing
      if (Game.hero.direction==3){
        heroMapCol = Math.floor(this.x/ map.tsize) - 1;
        heroMapRow = Math.floor(this.y/ map.tsize);
      }  else if (Game.hero.direction==2){
        heroMapCol = Math.floor(this.x/ map.tsize) + 1;
        heroMapRow = Math.floor(this.y/ map.tsize);
      }else if (Game.hero.direction==1){
        heroMapCol = Math.floor(this.x/ map.tsize);
        heroMapRow = Math.floor(this.y/ map.tsize) - 1;
      }else if (Game.hero.direction==0){
        heroMapCol = Math.floor(this.x/ map.tsize);
        heroMapRow = Math.floor(this.y/ map.tsize) + 1;
      }
      var tileGot=map.getTile(1,heroMapCol,heroMapRow)
      // if hero is at the sell block, it checks what plant it is holding, this value correlates to mult and then pays off
      if (map.getTile(0,heroMapCol,heroMapRow)==9){
        var mult=1;
        if (this.objectHolding==3){mult=1};
        if (this.objectHolding==13){mult=2};
        if (this.objectHolding==17){mult=2.25};
        this.score+=(mult*100);
        this.objectHolding=null;
      }
      //if the hero has an object in its hand and there is anavailable dirt spacem place the object
      if (map.getTile (0, heroMapCol, heroMapRow) == 2 && tileGot==0){
        map.setTile (1, heroMapCol, heroMapRow, this.objectHolding);
        this.objectHolding = null;
      }
      //next three: if there is a pot and holding the seed, place the seed and progress growth stage by 1
      if (tileGot==5&&this.objectHolding==8){
        map.setTile(1,heroMapCol,heroMapRow,4);
        this.objectHolding=null
      }
      if (tileGot==5&&Hero.objectHolding==10){
        map.setTile(1,heroMapCol,heroMapRow,11);
        this.objectHolding=null
      }
      if (tileGot==5&&Hero.objectHolding==14){
        map.setTile(1,heroMapCol,heroMapRow,15);
        this.objectHolding=null
      }
      //if the green tree is watered or mulched at stage 1, it progresses to stage 2
      if (tileGot==4&&(this.objectHolding==6||this.objectHolding==7)){
        map.setTile(1,heroMapCol,heroMapRow,3);
        this.objectHolding=null;
      }
      //if the red tree is watered at stage1, progress to stage 2
      if (tileGot==11&&this.objectHolding==6){
        map.setTile(1,heroMapCol,heroMapRow,12);
        this.objectHolding=null;
      }
      //if the red tree is mulched at stage2, progress to stage 3
      if (tileGot==12&&this.objectHolding==7){
        map.setTile(1,heroMapCol,heroMapRow,13);
        Hero.objectHolding=null;
      }
      //if the blue tree is watered at stage2, progress to stage 3
      if (tileGot==16&&this.objectHolding==6){
        map.setTile(1,heroMapCol,heroMapRow,17);
        this.objectHolding=null;
      }
      //if the blue tree is mulched at stage1, progress to stage 2
      if (tileGot==15&&this.objectHolding==7){
        map.setTile(1,heroMapCol,heroMapRow,16);
        this.objectHolding=null;
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
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN, Keyboard.SPACE,Keyboard.W=87, Keyboard.A=65,  Keyboard.S=83,Keyboard.D=68,]);
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
            this.hero.direction=3;
          }
          else if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1;
            this.hero.direction=2;
          }
          else if (Keyboard.isDown(Keyboard.UP)) { diry = -1;
            this.hero.direction=1;
          }
          else if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1;
            this.hero.direction=0;
          }
          if (Keyboard.isDown(Keyboard.A)) { dirx2 = -1;
            this.hero2.direction=3;
          }
          else if (Keyboard.isDown(Keyboard.D)) { dirx2 = 1;
            this.hero2.direction=2;
          }
          else if (Keyboard.isDown(Keyboard.W)) { diry2 = -1;
            this.hero2.direction=1;
          }
          else if (Keyboard.isDown(Keyboard.S)) { diry2 = 1;
            this.hero2.direction=0;
          }
          if (Keyboard.isDown(Keyboard.SPACE)) {
            if (Game.hero.objectHolding==null){
              this.hero.pickUp();
            }else{
              this.hero.drop ();
            }
            if(Game.hero2.objectHolding==null){
              this.hero2.pickUp();
            }else{
              this.hero2.drop ();
            }
            Keyboard._keys[32] = false;
          }

          this.hero.move(delta, dirx, diry);
          this.hero2.move(delta,dirx2,diry2);
          this.camera.update();
        };
        Hero2.SPEED = 256; // pixels per second

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
          if (this.objectHolding==null){return;}
          //the else if ladder is determining which way hero is facing
          if (Game.hero2.direction==3){
            heroMapCol = Math.floor(this.x/ map.tsize) - 1;
            heroMapRow = Math.floor(this.y/ map.tsize);
          }  else if (Game.hero2.direction==2){
            heroMapCol = Math.floor(this.x/ map.tsize) + 1;
            heroMapRow = Math.floor(this.y/ map.tsize);
          }else if (Game.hero2.direction==1){
            heroMapCol = Math.floor(this.x/ map.tsize);
            heroMapRow = Math.floor(this.y/ map.tsize) - 1;
          }else if (Game.hero2.direction==0){
            heroMapCol = Math.floor(this.x/ map.tsize);
            heroMapRow = Math.floor(this.y/ map.tsize) + 1;
          }
          var tileGot=map.getTile(1,heroMapCol,heroMapRow)
          // if hero is at the sell block, it checks what plant it is holding, this value correlates to mult and then pays off
          if (map.getTile(0,heroMapCol,heroMapRow)==9){
            var mult=1;
            if (this.objectHolding==3){mult=1};
            if (this.objectHolding==13){mult=2};
            if (this.objectHolding==17){mult=2.25};
            this.score+=(mult*100);
            this.objectHolding=null;
          }
          //if the hero has an object in its hand and there is anavailable dirt spacem place the object
          if (map.getTile (0, heroMapCol, heroMapRow) == 2 && tileGot==0){
            map.setTile (1, heroMapCol, heroMapRow, this.objectHolding);
            this.objectHolding = null;
          }
          //next three: if there is a pot and holding the seed, place the seed and progress growth stage by 1
          if (tileGot==5&&this.objectHolding==8){
            map.setTile(1,heroMapCol,heroMapRow,4);
            this.objectHolding=null
          }
          if (tileGot==5&&Hero.objectHolding==10){
            map.setTile(1,heroMapCol,heroMapRow,11);
            this.objectHolding=null
          }
          if (tileGot==5&&Hero.objectHolding==14){
            map.setTile(1,heroMapCol,heroMapRow,15);
            this.objectHolding=null
          }
          //if the green tree is watered or mulched at stage 1, it progresses to stage 2
          if (tileGot==4&&(this.objectHolding==6||this.objectHolding==7)){
            map.setTile(1,heroMapCol,heroMapRow,3);
            this.objectHolding=null;
          }
          //if the red tree is watered at stage1, progress to stage 2
          if (tileGot==11&&this.objectHolding==6){
            map.setTile(1,heroMapCol,heroMapRow,12);
            this.objectHolding=null;
          }
          //if the red tree is mulched at stage2, progress to stage 3
          if (tileGot==12&&this.objectHolding==7){
            map.setTile(1,heroMapCol,heroMapRow,13);
            Hero.objectHolding=null;
          }
          //if the blue tree is watered at stage2, progress to stage 3
          if (tileGot==16&&this.objectHolding==6){
            map.setTile(1,heroMapCol,heroMapRow,17);
            this.objectHolding=null;
          }
          //if the blue tree is mulched at stage1, progress to stage 2
          if (tileGot==15&&this.objectHolding==7){
            map.setTile(1,heroMapCol,heroMapRow,16);
            this.objectHolding=null;
          }
        }

        Hero2.prototype.pickUp = function (){
          if (this.objectHolding != null) {return;}
          //determine which way hero2 is facing
          else if (Game.hero2.direction==3){
            heroMapCol = Math.floor(this.x/ map.tsize) - 1;
            heroMapRow = Math.floor(this.y/ map.tsize);
          }else if (Game.hero2.direction==2){
            heroMapCol = Math.floor(this.x/ map.tsize) + 1;
            heroMapRow = Math.floor(this.y/ map.tsize);
          }else if (Game.hero2.direction==1){
            heroMapCol = Math.floor(this.x/ map.tsize);
            heroMapRow = Math.floor(this.y/ map.tsize) - 1
          }else if (Game.hero2.direction==0){
            heroMapCol = Math.floor(this.x/ map.tsize);
            heroMapRow = Math.floor(this.y/ map.tsize) + 1;
          }
          var tileGot = map.getTile(1,heroMapCol,heroMapRow);
          //if there is nothing to pick up and there is a dirt block, sell it
          if (map.getTile(0,heroMapCol, heroMapRow)!=9&&map.getTile(0,heroMapCol, heroMapRow!=1)&&tileGot==0){
            map.setTile(0,heroMapCol,heroMapRow,1);
            this.score+=100;
            return;
          }
          //pick up the object on the tile if available
          else if (map.getTile (1, heroMapCol, heroMapRow) !=0){
            this.objectHolding = map.getTile (1, heroMapCol, heroMapRow);
            map.setTile (1, heroMapCol, heroMapRow, 0);
            return;
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
