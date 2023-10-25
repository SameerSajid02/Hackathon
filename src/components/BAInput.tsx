type propsType = {
    label: string,
    onchange?: any,
    type?: string,
    value?: any,
    disable?:any
  }
  
  export default function BAInput(props: propsType){
    const {label, onchange, type, value, disable} = props
    return(
      <>
      <input disabled={disable} className="rounded p-2 w-full outline-none border-2 border-indigo-800/75 focus:border-rose-600" placeholder={label} value={value} onChange={onchange} type={type?? "text"}/>
      </>
    )
  }