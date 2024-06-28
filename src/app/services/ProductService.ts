import apiClient, { ResponseSchema } from "./apiClient"
import { getAuthToken } from "./AuthTokenService";
import { IStore } from "./StoreService";

export type IProduct = {
    id: string;
    product_name: string;
    description: string;
    price_before: string;
    price_after: string;
    production_time: string;
    expired_time: string;
    stock: number;
    store: IStore;
    category_id: string;
    category_slug: string;
    image_url?: string;
    created_at: string;
    updated_at: string;
  }

export async function addNewProduct( newProductData: any ){
    try {
        const authToken = await getAuthToken();
        const response = await apiClient.post<ResponseSchema<any>>("/product/create", newProductData, {
            headers: {
                Authorization: `Bearer ${authToken}`, 
            },
        })
        return response.data.data
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getNearestProductFromUserWithoutQuery(){
    try {
        const authToken = await getAuthToken()
        const response = await apiClient.get<ResponseSchema<any>>("/product?distance=20000&limit=30&offset=0", {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        return response.data.data
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getPublicNearestProductWithoutQuery(){
    try {
        const response = await apiClient.get<ResponseSchema<any>>("/product/public?distance=20000&limit=30&offset=0")
        return response.data.data
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getProductDetailsById(productId: string){
    try {
        const authToken = await getAuthToken()
        const response = await apiClient.get<ResponseSchema<any>>(`/product/${productId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        return response.data.data
    } catch (error) {
        console.error(error)
        return null
    }
}