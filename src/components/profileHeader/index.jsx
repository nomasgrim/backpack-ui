import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import MarkdownRenderer from "react-markdown-renderer";
import Avatar from "../avatar";
import LocationLabel from "../locationLabel";
import Tag from "../tag";
import TagList from "../tagList";
import MoreLink from "../moreLink";
import { Heading, TextBodySmall } from "../text";
import { fontSizeHeading7, lineHeightReset } from "../../styles/typography";
import propTypes from "../../utils/propTypes";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.readMore = this.readMore.bind(this);
  }

  readMore() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const {
      name,
      intro,
      avatarSrc,
      website,
      location,
      interests,
      interestsLimit,
      alignment,
      style,
    } = this.props;

    return (
      <header
        className="ProfileHeader"
        style={[
          (alignment === "center") && { textAlign: "center" },
          style,
        ]}
      >
        <Style
          scopeSelector=".ProfileHeader-bio"
          rules={{
            "img, video, iframe": {
              display: "none !important",
            },
          }}
        />

        <div
          style={[
            (alignment === "left") && { display: "flex", alignItems: "center" },
          ]}
        >
          {avatarSrc &&
            <Avatar
              src={avatarSrc}
              alt={`Avatar for user ${name}`}
              size={80}
              className="ProfileHeader-avatar"
              style={[
                (alignment === "left") && {
                  marginRight: "33px",
                },
              ]}
            />
          }

          <div
            style={[
              (alignment === "center") && { marginTop: "23px" },
            ]}
          >
            {location &&
              <LocationLabel
                style={[
                  (alignment === "center") && { marginBottom: "10px" },
                  (alignment === "left") && { marginBottom: "7px" },
                ]}
              >
                {location}
              </LocationLabel>
            }

            {name &&
              <Heading level={1} size={5} weight="medium" style={{ lineHeight: lineHeightReset }}>
                {name}
              </Heading>
            }

            {website &&
              <TextBodySmall
                style={[
                  { fontSize: `${fontSizeHeading7}px`, lineHeight: lineHeightReset },
                  (alignment === "center") && { marginTop: "6px" },
                  (alignment === "left") && { marginTop: "8px" },
                ]}
              >
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {website.substr(website.indexOf("://") + 3).replace("www.", "")}
                </a>
              </TextBodySmall>
            }
          </div>
        </div>

        {intro &&
          <div className="ProfileHeader-bio">
            <TextBodySmall
              style={[
                { marginTop: "37px" },
                (alignment === "center") && {
                  lineHeight: (24 / 14),
                },
                (alignment === "left") && {
                  fontSize: "16px",
                  lineHeight: (24 / 16),
                },
              ]}
            >
              <div
                style={[!this.state.expanded && {
                  display: "-webkit-box",
                  maxHeight: `${24 * 3}px`,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }]}
              >
                <MarkdownRenderer
                  markdown={intro}
                />
              </div>

              <MoreLink
                caps
                size="small"
                hideIcon
                onClick={this.readMore}
              >
                {this.state.expanded ? "Read less" : "Read more"}
              </MoreLink>
            </TextBodySmall>
          </div>
        }

        {interests && interests.length > 0 &&
          <TagList
            style={[
              (alignment === "center") && { marginTop: "39px" },
              (alignment === "left") && { marginTop: "31px" },
            ]}
            limit={interestsLimit}
            rows={10}
          >
            {interests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </TagList>
        }
      </header>
    );
  }
}

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  intro: PropTypes.string,
  website: PropTypes.website,
  avatarSrc: PropTypes.string,
  location: PropTypes.string,
  interests: PropTypes.arrayOf(PropTypes.string),
  interestsLimit: PropTypes.number,
  alignment: PropTypes.oneOf(["center", "left"]),
  style: propTypes.style,
};

ProfileHeader.defaultProps = {
  alignment: "center",
};

export default radium(ProfileHeader);
