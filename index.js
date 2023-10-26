
let login = document.getElementById('login');

class Profile {
    constructor(name, age, hobbies, img) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.image = img;
    }
}

class DatingApp {
    constructor() {
        this.characters = [];
        this.matches = [];
        this.loadCharacters();     
        login.addEventListener('click', () => {
            this.loadScreen();
            
        })
    }

    loadScreen() {
        let pElement = document.getElementById('profile');
        let profCard = document.createElement('div');
        let image = document.createElement('img');
        let name = document.createElement('h3');
        this.profile = this.characters[0];
        this.characters.shift();
        
        let profile = this.profile;

        image.src = profile.image;
        image.setAttribute('class','profImage');
        name.innerText = profile.name
        profCard.setAttribute('class','profCard')

        profCard.append(image,name);
        pElement.append(profCard);

        this.loadProfiles();
    }

    loadProfiles() {
        // iterate over characters
        // create and append a profile card for each character
           // create image 
           // create h2
        
            let matches = document.getElementById('matches');
            matches.innerHTML = "";


        for (let character of this.characters) {
            // console.log(character);
            let matchCard = document.createElement('div');
            let image = document.createElement('img');
            let name = document.createElement('h3');
            let age = document.createElement('h4');

            image.src = character.image;
            image.setAttribute('class','matchImage')
            name.innerText = character.name;
            matchCard.addEventListener('click', () => {
                this.deleteMatch(character);
            })

            matchCard.append(image, name);
            matches.append(matchCard);
            
        }
    }

    deleteMatch(match) {
        console.log(`deleting ${match.name}`);

        //I want to update the this.characters array to not include them :)

        this.characters = this.characters.filter(c => c.name !== match.name);
        
        this.loadProfiles();

        //Re draw / recall the loadProfiles array
    }

    loadCharacters() {
        let characters = [
            ['Superman',26,['singing','camping'],'https://mx.web.img3.acsta.net/r_1280_720/newsv7/19/07/10/23/58/01686460.jpg'],
            ['Jake',28,['swimming','camping'],'http://pre01.deviantart.net/a878/th/pre/i/2014/337/0/4/starlord_by_ismariandas-d88lm6t.jpg'],
            ['Henry',32,['boxing','swimming'],'https://wallpapersmug.com/download/840x1336/751c3b/the-scarlet-witch-wanda-vision-2021.jpg'],
            ['Sarah', 23, ['reading', 'painting'],'https://cdn.vox-cdn.com/thumbor/d68wDrZjrJLU6D4itoV5aN_6xCg=/0x0:4000x1676/1400x933/filters:focal(1342x482:1982x1122):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71447836/BPL1160_comp_DDO_v0237.1180_R2.6.jpg'],
            ['Michael', 30, ['hiking', 'cooking'],'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/04/Hulk-with-Glasses-in-Avengers-Endgame.jpg'],
            ['Emily', 29, ['biking', 'photography'],'https://www.looper.com/img/gallery/the-darkest-origin-stories-in-the-mcu/mantis-1625780095.jpg'],
            ['David', 25, ['dancing', 'traveling'],'https://s-media-cache-ak0.pinimg.com/originals/29/70/5a/29705a2f3fa3c86514dd7c8c78822e11.jpg'],
            ['Olivia', 27, ['yoga', 'gardening'],'https://respawnfirst.com/wp-content/uploads/2020/11/db967818ea1650ca0154d5bd2c713beb-696x464.jpg'],
            ['James', 31, ['playing guitar', 'skiing'],'https://one37pm.imgix.net/one37pm-editor-dev-images/s3fs-public/user-images/2019-08/valkyrie.jpg?ch=Width,DPR&auto=compress&q=60&w=750&fit=clip&dpr=2'],
            ['Sophia', 22, ['drawing', 'playing piano'],'https://i0.wp.com/ramenswag.com/wp-content/uploads/2019/03/Brie-Larson-In-As-Captain-Marvel-2019-_-Movie-Wallpapers-_-Captain-....jpg?fit=950%2C1689&ssl=1'],
            ['Benjamin', 28, ['running', 'fishing'],'https://i.pinimg.com/736x/56/e5/e4/56e5e43cd1a50f7600bab09f3c7b0c7d.jpg'],
            ['Ava', 24, ['coding', 'movies'],'https://64.media.tumblr.com/64d1a9d8dd0f3dcec6dfdc0fa6cba3f1/tumblr_pfbdrkQI491r2uthyo1_1280.png'],
            ['William', 26, ['surfing', 'bird watching'], 'https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg'],
            ['Grace', 30, ['rock climbing', 'cooking'], 'https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg'],
            ['Ethan', 29, ['reading books', 'painting'],'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/07/Billy-Cranston-Mighty-Morphin-Power-Rangers-Blue-Ranger.jpg']
        ]

        for (let character of characters) {
            this.characters.push(new Profile(character[0],character[1],character[2], character[3]))
        }
    }

    signUp() {
        let newName = prompt('name:');
        let age = prompt('age:');
        let hobbies = prompt('hobby:')
        this.characters.push(new Profile(newName,age,[hobbies]))
    }

    isAMatch(per1,per2) {
        // console.log(per1.hobbies,per2.hobbies);

        for (let p1Hobby of per1.hobbies) {
            for (let p2Hobby of per2.hobbies) {
                if (p1Hobby === p2Hobby) {
                    console.log(`${per1.name} is a match with ${per2.name}. They both like ${p1Hobby}!`)
                    this.matches.push([per1,per2])
                }
            }
        }

    }

    checkAll() {

        //iterates through profiles and finds all matches
        for (let profile of this.characters) {
            let allOthers = this.characters.filter(p => p.name !== profile.name);


            for (let other of allOthers) {
                this.isAMatch(profile,other)
            }
        }
    }
}

let zoomDating = new DatingApp();
