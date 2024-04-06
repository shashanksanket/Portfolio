const API_URL = `http://localhost:3000/api/v1`

export const USER_CREATE = () => `${API_URL}/user/`
export const USER_UPDATE = (id:string) => `${API_URL}/user/${id}`
export const USER_GET = () => `${API_URL}/user/`
export const USER_GET_DEFAULT = () => `${API_URL}/user/65e46909154016d3a229e1a0`
export const USER_GET_BY_ID = (id:string) => `${API_URL}/user/${id}`
export const USER_DELETE = (id:string) => `${API_URL}/user/${id}`

export const CONTACT_CREATE = () => `${API_URL}/contact/`
export const CONTACT_UPDATE = (id:string) => `${API_URL}/contact/${id}`
export const CONTACT_GET = () => `${API_URL}/contact/`
export const CONTACT_GET_BY_USERID = (userid:string) => `${API_URL}/contact/${userid}`
export const CONTACT_DELETE = (id:string) => `${API_URL}/contact/${id}`