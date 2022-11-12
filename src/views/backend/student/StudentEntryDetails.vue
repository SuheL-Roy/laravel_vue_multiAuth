<template>
  <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <tr>
                            <td>
                                book name
                            </td>
                            <td style="width:3px">:</td>
                            <td>
                               {{entry.book_name}}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
   name:'StudentEntryDetails',
   data: function(){
        return {
            entry: {},
        }
    },
    created: function(){
       //let id = this.$route.params.id;
       // console.log(id);
        window.axios.get(`/book-entry/single-entry/${this.$route.params.id}`)
        .then((res) => {
            console.log(res.data);
            this.entry = res.data;
        });
    }
}
</script>

<style>

</style>