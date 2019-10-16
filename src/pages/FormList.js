import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { List, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { useState } from 'react';
import { formList } from "../data/mockData";


const FormList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)


    useEffect (() => {
        setData(formList)
    }, [])


   const handleInfiniteOnLoad = () => {
        setLoading(true)
        if (data.length > 14) {
          setHasMore(false)
          setHasMore(false)
          return;
        }
      };

      return (
        <div className="demo-infinite-container">
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={handleInfiniteOnLoad}
            hasMore={!loading && hasMore}
            useWindow={false}
          >
            <List
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item key={index}>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://miro.medium.com/max/2462/1*UihDV6GZsr55V7qx_1ME2w.jpeg" />
                    }
                    title={<a href="https://lambdaschool.com">{item.title}</a>}
                    description={item.description}
                  />
                  <div>Form</div>
                </List.Item>
              )}
            >
              {loading && hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
            </List>
          </InfiniteScroll>
        </div>
      );
}

export default FormList