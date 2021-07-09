const app = Vue.createApp({
    data() {
        return {
            message: "you can call me ' WIT ' ",
            profile: {
                info: {
                    name: "Chawengwit Wongviriyasakul",
                    birthday: "Born on August29, 1992",
                    query: "take the risk or lose the chance.",
                },
                img: "./img/profile.jpg",
                imgSize : {
                    width: '100px',
                    height: '100px',
                }
            },
            education: {
                info: {
                    university : "Bechelor of Engineering at Kasetsart University | Survey and Geographic Information (2012-2016)"
                },
                img: "",
                imgSize: ""
            },
            works: {
                info: {
                    bhiraj: "Bhiraj Buri Group | Exhibition Hall (2016-2017)",
                    itd: "Italian-Thai Development | MRT Orange Line Project – Underground works E3 (2017-Present)"
                },
                img: {
                    bhiraj : "./img/Bhiraj.jpg",
                    itd: "./img/Itd.jpg"
                },
                imgSize: {
                    bhiraj: {
                        width: '140px',
                        height: '140px',
                    },
                    itd: {
                        width: '375px',
                        height: '211px',
                    }
                }
            },
            contact: {
                email : "Email: chawengwit.w@gmail.com",
                lineID: "Line ID: wittupuu",
                phone: "Phone: 097-146-6669"
                
            },
            skills: {
               programs: ["Python, Flask, FastAPI", "Vuejs", "HTML, CSS and Javascript"],
               database: ["SQL"],
            },

            
            qty: 0,
            selectIndex: 0,
        }
    },
    methods: {
      handleOrder() {
          this.qty++;
      },
      handleCancel() {
          this.qty = 0;
      },
      updateIndex(index) {
          this.selectIndex = index;
      }
    },
    computed: {
        title() {
            return `${this.message}`
        },
        workImage() {
            if (this.selectIndex == "bhiraj") {
                return `${this.works.img.bhiraj}`
            }else if(this.selectIndex == "itd") {
                return `${this.works.img.itd}`
            }
            return ;
        },
        workImgSize() {
            if (this.selectIndex == "bhiraj") {
                return `${this.works.imgSize.bhiraj}`
            }else if(this.selectIndex == "itd") {
                return `${this.works.imgSize.itd}`
            }
            return ;
        }
    },
})