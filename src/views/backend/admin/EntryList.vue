<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Entry List</h4>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-bordered table-striped text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>User</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Return Date</th>
                  <th class="text-center" style="width: 20%">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(book, index) in entry_list" :key="book.id">
                  <td>{{ index+1 }}</td>
                  <td>
                   
                      <img v-if="book.book_image.split('/')[0] === 'upload'" :src="`${get_server_url}/${book.book_image}`"
                        style="height: 70px" alt="image" />
                      <img v-else :src="`http://${book.book_image}`" style="height: 70px" alt="image" />
                  </td>
                  <td>{{ book.book_name }}</td>
                  <td>{{ book.user_name }}</td>
                  <td>{{ book.time }}</td>
                  <td>{{ book.date }}</td>
                  <td>{{ book.return_date }}</td>
                  <td>
                    <div class="d-flex justify-content-end">
                      <router-link
                        :to="{ name: 'NewEntry' }"
                        class="btn btn-sm btn-success mx-1"
                        >New Entry</router-link
                      >
                      <router-link
                        :to="{ name: 'BookEditEntry' , params: { id: book.id } }"
                        class="btn btn-sm btn-warning mx-1"
                        >Edit</router-link
                      >
                      <a  @click.prevent="delete_entry(book,index)" class="btn btn-sm btn-danger mx-1">Delete</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer">
            <pagination v-model="page" :records="total" :per-page="per_page" @paginate="getData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from 'v-pagination-3';
import { mapGetters } from 'vuex';
export default {
  name: "EntryList",
  components: {
    Pagination
  },
  data: function () {
    return {
      entry_list: {},
      page: 1,
      per_page: 0,
      total: 0,
    }
  },

  created: function () {
    this.getData();
  },

  methods: {
    getData: function (page = 1) {
      let url = `/book-entry/book-entry-list?page= ${page}`;
      window.axios.get(url)
        .then((res) => {
         // console.log(res.data.data);
          this.entry_list = res.data.data;
          this.total = res.data.total;
          this.per_page = res.data.per_page;
        }).catch(err => {
          console.log(err);
        })
    },

    delete_entry:function(book,index){
      let con = confirm("sure want to delete??");
      console.log(index);
      if (con) {
        window.axios.post("/book-entry/entry-delete", { id: book.id }).then((res) => {
          console.log(res.data);
          // this.book_list.data.splice(index,1);
          this.getData();
        });
      }
    },


  },
  computed: {
    ...mapGetters([
      'get_server_url'
    ])
  }
};
</script>

<style>

</style>
