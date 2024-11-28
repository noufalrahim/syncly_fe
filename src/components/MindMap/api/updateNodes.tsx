import { BASE_URL } from '@/constants';
import axios from 'axios';
import { NodeTypes } from '../types';

export const updateNodes = async (data: NodeTypes, projectId: number, nodeId: number) => {
  console.log('data : ', data);
  console.log('nodeId: ', nodeId);
  try {
    const response = await axios.get(`${BASE_URL}/projects?id=${projectId}`);
    const resp = response.data;
    const MindMap = resp[0].mindMap;
    const nodes = MindMap.nodes;
    const nodeIndex = nodes.findIndex((node: any) => node.id === nodeId);

    if (nodeIndex === -1) {
      return [];
    }

    const newNodesData = nodes.map((node: any) => {
      if (node.id === nodeId) {
        return {
          ...node,
          ...data,
        };
      }
      return node;
    });

    console.log(newNodesData);

    resp[0].mindMap.nodes = newNodesData;
    console.log(resp[0]);
    const patchResponse = await axios.patch(`${BASE_URL}/projects/${projectId}`, resp[0]);
    console.log(patchResponse);
    return patchResponse;
  } catch (error) {
    console.error(error);
    return [];
  }
};
