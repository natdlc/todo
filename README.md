# todo

<!-- 
local storage

  when user clicks add list, add new data to local storage

    local storage key is date
    local storage value is a list container (object or array)
      list container contains one or more list objects

        each list object contains the ff data
          title (string)
          hasPriority (bool)
          checked (bool)
          sublists (object)

            each sublist contains the ff data
              title (string)
              time (string)
              duration (string)
              priority (string)
              checked (bool)
          
  update local storage when user clicks on the ff elements

    checkmark (list header)
    title (list header)
    del (list header)

    checkmark (sublist)
    title (sublist)
    time (sublist)
    duration (sublist)
    priority (sublist)
    del (sublist)


//localstorage key is date
  //value of localstorage date key is listcontainerobject or listarray
    //listcontainerobject or listarray contains multiple list object
      //each list object contains the following key value pairs
      // title: string
      // checked: boolean
      // hasPriority: boolean
      // sublists: object
        // title: title
        // time: time
        // duration: duration
        // priority: priority
        // checked: bool
 -->