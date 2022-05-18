import React, { useEffect, useState } from "react";

const AsyncList = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getDataTwo();
    // getDataThree()
    getData().then((list) => {
      setDataList(list);
    });
  }, []);
  const getData = () => {
    return new Promise((resolve) => {
      delayFn(() => {
        return [
          { title: "12321" },
          { title: "456" },
          {
            title: "hascontent",
            content: "contentcontentcontent",
          },
        ];
      }, 1000).then((data) => {
        const list = [];
        data.forEach((item) => {
          const promise = new Promise((resolve) => {
            (async () => {
              if (!item.content) {
                await delayFn(() => {
                  return "test";
                }, 1000).then((val) => {
                  item.content = val;
                  resolve(item);
                });
              } else {
                item.content = "5678";
                resolve(item);
              }
            })();
          });
          list.push(promise);
        });
        Promise.all(list).then((data) => {
          resolve(data);
        });
      });
    });
  };

  //多个promie回调
  const getDataTwo = () => {
    delayFn(() => {
      return "第一个promise成功";
    }, 5000).then((msg) => {
      delayFn(() => {
        console.log(msg);
        return "第二个Promise成功";
      }, 2000).then((msg) => {
        delayFn(() => {
          console.log(msg);
          return "第三个Promise成功";
        }, 1000).then((msg) => {
          console.log("最后=======", msg);
        });
      });
    });
  };

  const getDataThree = () => {
    delayFn(() => {
      return Promise.resolve("第一个promise成功");
    }, 5000)
      .then((msg) => {
        delayFn(() => {
          console.log(msg);
          return Promise.resolve("第二个Promise成功");
        }, 2000);
      })
      .then((msg) => {
        delayFn(() => {
          console.log(msg);
          return Promise.resolve("第三个Promise成功");
        }, 1000);
      })
      .then((msg) => {
        console.log("最后=======", msg);
      });
  };

  const delayFn = (fn, timer) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = fn();
        resolve(Promise.resolve(result))
      }, timer);
    });
  };

  return (
    <div>
      {console.log("rendering=========", dataList)}
      {dataList &&
        dataList.length &&
        dataList.map((item, index) => <Child detail={item} key={index} />)}
      {/* <ChildTwo/> */}
    </div>
  );
};

const Child = ({ detail }) => {
  console.log("==========detail", detail);
  const { title, content } = detail;
  return (
    <div>
      {title}-----{content}
    </div>
  );
};

class ChildTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "data",
    };
  }

  componentDidMount() {
    this.setState({
      data: "did mount state",
    });
    console.log("did mount state", this.state.data);

    setTimeout(() => {
      this.setState({
        data: "setTimeout",
      });
      console.log("setTimeout", this.state.data);
    });
  }

  render() {
    return <div></div>;
  }
}

export default AsyncList;
