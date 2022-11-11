<template>
  <div>
    <div class="row justify-content-center mt-4">
      <div class="col-sm-12 col-md-8 col-lg-9">
        <div class="card">
          <div class="card-header">
            <h4>New Entry</h4>
          </div>
          <div class="card-body">
            <form action="" @submit.prevent="submit_entry">
              <div class="form-group">
                <label for="">User Name</label>
                <Select2
                  class="form-control"
                  v-model="myValue"
                  :options="myOptions"
                  :settings="{
                    multiple: false,
                    placeholder: `search user and select`,
                    allowClear: true,
                  }"
                  @change="myChangeEvent($event)"
                  @select="mySelectEvent($event)"
                />
              </div>
              <div class="form-group">
                <label for="">Book Name</label>
                <Select2
                  class="form-control"
                  v-model="myBooksValue"
                  :options="book_list_option"
                  :settings="{
                    multiple: true,
                    placeholder: `search book and select`,
                    allowClear: true,
                  }"
                  @change="myBookChangeEvent($event)"
                  @select="myBookSelectEvent($event)"
                />
              </div>
              <div class="form-group">
                <label for="">Time</label>
                <input type="time" v-model="time" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Date</label>
                <input type="date" v-model="date" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Return Date</label>
                <input type="date" v-model="return_date" class="form-control" />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select2 from "vue3-select2-component";
export default {
  name: "NewEntry",
  components: {
    Select2,
  },
  data() {
    return {
      myValue: "",
      myBooksValue: "",
      // myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]
      myOptions: [],
      book_list_option: [],
      time:'',
      date:'',
      return_date:''

    };
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData: function () {
      window.axios
        .get("/user/selector")
        .then((res) => {
          console.log(res)
         this.myOptions = res.data
        })
        .catch((err) => {
          console.log(err.response);
        });


        window.axios
        .get("/book-list/book-select")
        .then((res) => {
          this.book_list_option = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    submit_entry: function(){
       let fromData = {
          user_id : this.myValue,
          book_ids : this.myBooksValue,
          return_date: this.return_date,
          date: this.date,
          time: this.time
       }
       window.axios
        .post("/book-entry/create",fromData)
        .then((res) => {
          console.log(res.data);
          this.myValue=""
          this.myBooksValue = []
          this.time=''
          this.date=''
          this.return_date=''
        })
        .catch((err) => {
          console.log(err.response);
        });

    },
    myChangeEvent(val) {
      console.log(val);
    },
    mySelectEvent({ id, text }) {
      console.log({ id, text }, this.myValue);
    },

    myBookChangeEvent(val) {
       console.log(val);
    },
    myBookSelectEvent({ id, text }) {
      console.log({ id, text }, this.myBooksValue);
    },

  },
};
</script>

<style></style>
