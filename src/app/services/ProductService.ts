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