import { toast } from 'react-toastify';

export const handleSuccess = (msg)=>{
toast.success(msg, { //bydefault in green
	position: 'top-right'
})	
}

export const handleError = (msg)=>{ //bydefault in red
toast.error(msg, {
	position: 'top-right'
})	
}