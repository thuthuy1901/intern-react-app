import { useAtom } from 'jotai';
import { listPost } from '../../store';
import { Card, List, Tag } from 'antd';

const ListPost = () => {
    const [posts] = useAtom(listPost);
    return (
        <List
            className="font-bold"
            grid={{ gutter: 16, column: 1 }}
            dataSource={posts || []}
            renderItem={(post) => (
                <List.Item>
                    <Card title={post.title}>
                        <p className="mb-2">{post.description}</p>
                        <div>
                            {post.tags.map((tag, index) => (
                                <Tag color="blue" key={index}>
                                    {typeof tag === 'string' ? tag : tag.tag}
                                </Tag>
                            ))}
                        </div>
                    </Card>
                </List.Item>
            )}
        />
    );
};

export default ListPost;
