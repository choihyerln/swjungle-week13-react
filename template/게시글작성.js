import { type } from "os";
import react, { useEffect, useState } from "react";
import { Input } from "antd";
const { TextArea } = Input;

const Post = () => {
  const [form, setForm] = useState({
    writer: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    if (location.state !== null) {
      setForm({
        ...form,
        writer: location.state.writer,
        title: location.state.title,
        content: location.state.body,
      });
    }
  }, []);

  return (
    <div>
      <Input
        className="title"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        showCount
        maxLength={5}
      />
      <br />
      <br />
      <TextArea
        className="content"
        placeholder="본문을 입력하세요"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        showCount
        maxLength={20}
      />
    </div>
  );
};

export default Post;