<template>
    <div>
       <div class="row">
         <div class="col-12">
           <div class="card">
             <div class="card-header">
               <div class="d-flex justify-content-between flex-wrap">
                 <h4>Book List</h4>
                 <input
                   type="text"
                   class="form-control w-50"
                   placeholder="search.."
                 />
                 <button
                   class="btn btn-success"
                 >
                   Delete Selected 
                 </button>
               </div>
             </div>
             <div class="card-body table-responsive">
               <table
                 class="
                   table table-bordered table-striped
                   text-center
                   align-middle
                 "
               >
                 <thead>
                   <tr>
                     <th>
                       <input
                         type="checkbox"
                         id="check_all"
                         class="form-check"
                       />
                     </th>
                     <th>#</th>
                     <th>Image</th>
                     <th>Book Name</th>
                     <th>Author</th>
                     <th>Section</th>
                     <th class="text-center" style="width: 20%">Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr >
                     <td>
                       <input
                         type="checkbox"
                         class="form-check"
                       />
                       <!-- <input
                         type="checkbox"
                         class="form-check"
                       /> -->
                     </td>
                     <td></td>
                     <td>
                       <img
                         style="height: 70px"
                         alt="image"
                       />
                       <!-- <img
                         style="height: 70px"
                         alt="image"
                       /> -->
                     </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>
                       <div class="d-flex justify-content-end">
                         <a href="#" class="btn btn-sm btn-primary mx-1"
                           >New Entry</a
                         >
                         <a
                     
                           class="btn btn-sm btn-warning mx-1"
                           >Edit</a
                         >
                         <!-- <a href="#" class="btn btn-sm btn-warning mx-1">Edit</a> -->
                         <a
                           href="#"
                           class="btn btn-sm btn-danger mx-1"
                           >Delete</a
                         >
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
     name:'ManageMentBookList'
   }
   </script>
   
   <style>
   
   </style>