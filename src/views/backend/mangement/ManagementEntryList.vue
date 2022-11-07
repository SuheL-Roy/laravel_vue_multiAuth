<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Entry List</h4>
                    </div>
                    <div class="card-body table-responsive">
                        <table class="
								table table-bordered table-striped
								text-center
							">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>User</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Return Date</th>
                                    <th class="text-center" style="width: 20%">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td></td>
                                    <td>
                                        <!-- <div >
                                            <img  src="" style="height: 70px" alt="image" />
                                            <img  src="" style="height: 70px"
                                                alt="image" />
                                        </div> -->
                                        <img  src="" alt="image" />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div class="d-flex justify-content-end">
                                            <a href="#" class="
													btn btn-sm btn-primary
													mx-1
												">New Entry</a>
                                            <a href="#" class="
													btn btn-sm btn-warning
													mx-1
												">Edit</a>
                                            <a href="#" class="
													btn btn-sm btn-danger
													mx-1
												">Delete</a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script>
export default {
    name: 'ManagementEntryList'
}
</script>
  
<style>

</style>