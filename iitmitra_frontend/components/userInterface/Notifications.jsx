import React from 'react'

export const Notifications = () => {
    return (
        <>
         <div class="max-w-xl mx-auto mt-6 p-4 bg-white rounded-xl shadow w-100">
    <h2 class="text-2xl font-semibold mb-4">Notifications</h2>

    {/* <!-- Notification List --> */}
    <div class="space-y-4 overflow-y-scroll h-75 ">

      {/* <!-- Notification Item (Unread) --> */}
      <div class="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400 shadow-sm hover:border-2">
        <p><span class="font-semibold">Alex</span> liked your post.</p>
        <p class="text-sm text-gray-500">2 minutes ago</p>
      </div>

      {/* <!-- Notification Item (Unread) --> */}
      <div class="p-4 bg-blue-50 rounded-md border-l-4 border-blue-400 shadow-sm hover:border-2 ">
        <p><span class="font-semibold">Jamie</span> commented: "Awesome photo!"</p>
        <p class="text-sm text-gray-500">10 minutes ago</p>
      </div>

      {/* <!-- Notification Item (Read) --> */}
      <div class="p-4 bg-gray-50 rounded-md border-l-4 border-gray-300 hover:border-1">
        <p><span class="font-semibold">Taylor</span> started following you.</p>
        <p class="text-sm text-gray-500">1 hour ago</p>
      </div>

      {/* <!-- Notification Item (Read) --> */}
      <div class="p-4 bg-gray-50 rounded-md border-l-4 border-gray-300 hover:border-1">
        <p><span class="font-semibold">Morgan</span> liked your comment.</p>
        <p class="text-sm text-gray-500">Yesterday</p>
      </div>

    </div>
  </div> 
        </>
    )
}
