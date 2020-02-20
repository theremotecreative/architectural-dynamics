import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaSearch } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

class LightBox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  render() {
    const { images } = this.props
    const { showLightbox, selectedImage } = this.state
    return (
      <Fragment>
        <Gallery>
          {images.map((img, i) => (
            <GalleryItem key={img.localFile.childImageSharp.sizes.src}>
              <a href={img.localFile.childImageSharp.sizes.src} alt="Project Image" onClick={e => this.handleClick(e, i)}>
                <StyledImg sizes={img.localFile.childImageSharp.sizes} alt="Gallery Image"/>
                <TextPanel>
                  <TextCell>
                    <FaSearch />
                  </TextCell>
                </TextPanel>
              </a>
            </GalleryItem>
          ))}
        </Gallery>

        <LightboxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>
          <LightboxContent>
            <LightboxImg sizes={images[selectedImage].localFile.childImageSharp.sizes} alt="Lightbox Image"/>
            <Controls>
              <Button onClick={this.closeModal}><FaTimes/></Button>
              <LeftRight>
                <Button onClick={this.goBack} disabled={selectedImage === 0}>
                  <FaChevronLeft />
                </Button>
                <Button onClick={this.goForward} disabled={selectedImage === images.length - 1}>
                  <FaChevronRight />
                </Button>
              </LeftRight>
            </Controls>
          </LightboxContent>
        </LightboxModal>
      </Fragment>
    )
  }
}

const StyledImg = styled(Img)`
  transition-duration: .3s;
`

const Gallery = styled.div`
  column-count: 1;
  column-gap: 1em;
  transition-duration: .3s;
  @media (min-width: 500px) {
    column-count: 2;
  }
  @media (min-width: 900px) {
    column-count: 3;
  }
`

const TextPanel = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  align-items: center;
  margin: 0 auto;
`

const TextCell = styled.div`
  width: 100%;
  transition: all .3s;
  opacity: 0;
  transform: scale(.7);
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
`

const GalleryItem = styled.div`
  position: relative;
  background-color: #000;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  transition-duration:.3s;
  &:hover {
    ${StyledImg} {
      opacity: 0.2;
    }
    ${TextCell} {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const Button = styled.button``

const LightboxModal = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 1);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`

const LightboxImg = styled(Img)``

const LightboxContent = styled.div`
  position: relative;
  margin: 15px;
  max-width: 1000px;
  width: 100%;
  max-height: 80vh;
  height: 100%;
  ${LightboxImg} {
    max-width: 1000px;
    width: 100%;
    max-height: 80vh;
    height: 100%;
  }
`

const Controls = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  > button {
    position: absolute;
    top: -50px;
    font-size: 30px;
    color: #fff;
    background: transparent;
    border: none;
  }
`

const LeftRight = styled.div`
  width: 100%;
  button {
    width: 50%;
    height: 100%;
    font-size: 50px;
    opacity: .6;
    background: transparent;
    border: none;
    transition-duration: .3s;
    &:hover {
      opacity: 1;
    }
    &:focus {
      outline: none;
    }
    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }
  }
`

LightBox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default LightBox