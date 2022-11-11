<template>
    <div>
      <div class="row justify-content-center mt-4">
        <div class="col-sm-12 col-md-8 col-lg-9">
          <div class="card">
            <div class="card-header">
              <h4>Book Edit</h4>
            </div>
            <div class="card-body">
              <form action="" id="form_book" enctype="multipart/form-data" @submit.prevent="entry_submit">
                <div class="form-group">
                  <label for="">Book Name</label>
                  <input type="text" :value="single_book.name"  name="name" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Author</label>
                  <input type="text" :value="single_book.author" name="author" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Section</label>
                  <input type="text" :value="single_book.section" name="section" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Published Date</label>
                  <input type="text" :value="single_book.published_date" name="published_date" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Image</label>
                  <input type="file"  name="image" class="form-control" />
                </div>
                <div class="form-group">
                  <button type="submit"  class="btn btn-secondary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookEdit',
    data:function(){
      return{
        single_book:{},
      }
    },
    created: function(){
       this.get_book() 
       this.url = "/book-list/update";
    },
    methods:{  
      get_book: function(){
         this.id = parseInt(this.$route.params.id);
         window.axios.get("/book-list/get/" + this.id).then((res)=>{
             console.log(res.data);
             this.single_book = res.data;
        }).catch(err=>{
           console.log(err.response);
        })
      },
      entry_submit:function(){
        /** Another Way update **/
    //     console.log('hi');
    //     this.id = parseInt(this.$route.params.id);
    //     let form_data = new FormData(document.getElementById('form_book'));
    //     if (this.url === "/book-list/update") {
    //     form_data.append("id", this.id);
    //   }
    //      window.axios.post(this.url, form_data).then((res)=>{
    //          console.log(res.data);
    //         // this.single_book = res.data;
    //     }).catch(err=>{
    //        console.log(err.response);
    //     })
      this.id = parseInt(this.$route.params.id);
        let form_data = new FormData(document.getElementById('form_book'));
         window.axios.post("/book-list/update/" + this.id,form_data).then((res)=>{
             console.log(res.data);
            // this.single_book = res.data;
            this.$router.replace({ name: "BookList" });
        }).catch(err=>{
           console.log(err.response);
        })
    }
    },
   
   
  }
  </script>
  
  <style>
  
  </style>