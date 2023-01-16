import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { AnnotationType } from '~/pages';
import axios from '../../api/annotations';

const fetchAnnotations = (): Promise<AnnotationType[]> =>
  axios.get('/annotations').then((response) => response.data);

export const useAnnotations = () => {
  return useQuery<AnnotationType[], Error>({
    queryKey: ['annotations'],
    queryFn: fetchAnnotations,
  });
};

const getAnnotationById = (id: number) =>
  axios.get(`/annotations/${id}`).then((response) => response.data);

export const useAnnotation = (annotationId: number) => {
  return useQuery<AnnotationType, Error>({
    queryKey: ['annotation', annotationId],
    queryFn: () => getAnnotationById(annotationId),
  });
};

const createAnnotation = (newAnnotation: AnnotationType) =>
  axios.post('/annotations', newAnnotation);

export const useCreateAnnotation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createAnnotation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['annotations'] });
    },
  });
};

const deleteAnnotation = (id: number) => axios.delete(`/annotations/${id}`);

export const useDeleteAnnotation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAnnotation,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['annotations'] }),
  });
};
