import { StyledPhotoDiv } from "./photoDiv.styled";

interface PhotoDivProps {
  photo: string;
}
const PhotoDiv: React.FC<PhotoDivProps> = ({ photo }) => {
  return (
    <StyledPhotoDiv>
      <img src={photo} alt="photo" />
    </StyledPhotoDiv>
  );
};

export default PhotoDiv;
