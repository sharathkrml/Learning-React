when we click on button in parent element(FocusInput),Input element in child component should receive the focus

1. in parent component,create a ref usinf createref method
2. Attach ref to component
3. this.componentRef.current.focusInput(); where focusInput is written in child component

### refs cannot be attached to functional components