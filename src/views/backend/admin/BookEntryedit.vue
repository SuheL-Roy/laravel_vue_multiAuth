<template>
  <div>
    <div class="row justify-content-center mt-4">
      <div class="col-sm-12 col-md-8 col-lg-9">
        <div class="card">
          <div class="card-header">
            <h4>Edit Entry</h4>
          </div>
          <div class="card-body">
            <form action="" id="entry_book"  enctype="multipart/form-data" @submit.prevent="entry_submit">
              <div class="form-group">
                <label for="">Time</label>
                <input type="time" :value="data.time" name="time" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Date</label>
                <input type="date" :value="data.date" name="date" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Return Date</label>
                <input type="date" :value="data.return_date" name="return_date" class="form-control" />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-secondary">Update</button>
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
  name: "BookEditEntry",
  data() {
    return {
      data: {},
    
    };
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData: function () {
      window.axios
        .get(`/book-entry/edit/${this.$route.params.id}`)
        .then((res) => {
              
           this.data = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    // entry_submit: function () {
    //   window.axios
    //     .post(`/book-entry/update/${this.$route.params.id}`,this.data)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err.response);
    //     });
    // },

    entry_submit:function(){
       
      this.id = parseInt(this.$route.params.id);
        let form_data = new FormData(document.getElementById('entry_book'));
         window.axios.post("/book-entry/update/" + this.id,form_data).then((res)=>{
             console.log(res.data);
            // this.single_book = res.data;
            this.$router.replace({ name: "EntryList" });
        }).catch(err=>{
           console.log(err.response);
        })
    }
   
  },
};
</script>

<style></style>
