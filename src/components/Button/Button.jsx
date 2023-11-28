import { Button } from './Button.styled';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick} className="load-more">
      Load More
    </Button>
  );
};
