technique for automatically passing a ref to a component to one of its children

1. parent component creates a ref and attaches it to child component instance
1. child component receives the ref from parent,and attaches to native input element
1. parent component can directly access input field


### child element is basically forwarding the ref