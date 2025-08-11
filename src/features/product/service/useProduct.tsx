import { product } from "@/shared/keys";
import { api } from "@/shared/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export interface IParams {
  page?: string;
  limit?: string;
  name?: string;
}

export const useProduct = () => {
  const queryClient = useQueryClient();

  const getSearchProducts = (params: IParams) =>
    useQuery({
      queryKey: [product, params],
      queryFn: () => api.get("product", { params }).then((res) => res.data),
      enabled: !!params.name,
    });
  const getProducts = (params: IParams) =>
    useQuery({
      queryKey: [product, params],
      queryFn: () => api.get("product", { params }).then((res) => res.data),
    });

  const getOneProduct = (id: string) => (
    useQuery({
      queryKey: [product, id],
      queryFn: () => api.get(`product/${id}`).then(res => res.data)
    })
  )

  const getOneCategory = (id: string) => (
    useQuery({
      queryKey: [product, id],
      queryFn: () => api.get(`category/${id}`).then(res => res.data)
    })
  )


  const createProduct = useMutation({
    mutationFn: (body: any) =>
      api.post("product", body).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [product] });
    },
  });

  const updaProduct = useMutation({
    mutationFn: ({ body, id }: { body: any, id: string }) => api.patch(`product/${id}`, body).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [product] })
    }
  })

  const getCategory = (params: IParams) =>
    useQuery({
      queryKey: [product, params],
      queryFn: () => api.get("category", { params }).then((res) => res.data),
    });


  return { getProducts, getSearchProducts, createProduct, updaProduct, getCategory, getOneProduct, getOneCategory };
};
