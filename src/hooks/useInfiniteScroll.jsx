import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

const useInfiniteScroll = (url, querySelectorName) => {
  const [listItems, setListItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    try {
      const response = await axios.get(`${url}?page=${page}`);
      setListItems(prevData => [...prevData, ...response.data.results]);
      setPage(prevPage => prevPage + 1);
      if (!response.data.next) setHasMore(false);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }, [url, page, isLoading, hasMore]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const container = document.querySelector(querySelectorName);
      if (!container) return;

      const { scrollTop, clientHeight, scrollHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    }, 300);

    const container = document.querySelector(querySelectorName);
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}?page=${page}`);
        setListItems(response.data.results);
        setPage(page + 1);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  return { listItems, isLoading, error, setListItems };
};

export default useInfiniteScroll;