const { Author } = require("./Author");
const { Category } = require("./Category");
const { Comment } = require("./Comment");
const { Direction } = require("./Direction");
const { Ingredients } = require("./Ingredients");
const { LikeDislike } = require("./LikeDislike");
const { MediaGallery } = require("./mediaGallery");
const { Post } = require("./Post");
const { Tag } = require("./Tag");
const { Rating } = require("./Rating");
const { PostView } = require("./PostView");
const { User } = require("./User");
const { UserRole } = require("./UserRole");
const { VideoPost } = require("./VideoPost");
const { Role } = require("./Role");
const { PostCategory } = require("./PostCategory");
const { PostTags } = require("./PostTags");
const defineAssociations = () => {
  // 1 Author - Post : One-to-Many (An author can write many posts)
  Author.hasMany(Post, { foreignKey: "authorId" });
  Post.belongsTo(Author, { foreignKey: "authorId" });

  // 2 Post - PostCategory : One-to-many (A post can have many categories)
  Post.hasMany(Post, { foreignKey: "postId" });
  PostCategory.belongsTo(Post, { foreignKey: "postId" });

  // 3 PostCategory - Category : One-to-many (A category can have many post)
  Category.hasMany(PostCategory, { foreignKey: "categoryId" });
  PostCategory.belongsTo(Category, { foreignKey: "categoryId" });

  // 4 Post - PostTags : One-to-many (A post can have many tags)
  Post.hasMany(PostTags, { foreignKey: "postId" });
  PostTags.belongsTo(Post, { foreignKey: "postId" });

  // 5 Tag - PostTags : One-to-many (A tag can have many post)
  Tag.hasMany(PostTags, { foreignKey: "tagId" });
  PostTags.belongsTo(Tag, { foreignKey: "tagId" });

  // 6 User - UserRole : One-to-many (A user can have many roles)
  User.hasMany(UserRole, { foreignKey: "userId" });
  UserRole.belongsTo(User, { foreignKey: "userId" });

  // 7 Role - UserRole : One-to-many (A role can have many user)
  Role.hasMany(UserRole, { foreignKey: "roleId" });
  UserRole.belongsTo(Role, { foreignKey: "roleId" });

  // 8 Post -Comment : One-to-many (A post can have many comment)
  Post.hasMany(Comment, { foreignKey: "postId" });
  Comment.belongsTo(Post, { foreignKey: "postId" });

  // 9 User -Comment : One-to-Many (A user can write many comment)
  User.hasMany(Comment, { foreignKey: "userId" });
  Comment.belongsTo(User, { foreignKey: "userId" });

  // 10 Post - Rating : One -to Many (A post can have many Rating)
  Post.hasMany(Rating, { foreignKey: "postId" });
  Rating.belongsTo(Post, { foreignKey: "postId" });

  // 11 User - Rating : One-to-Many (A user cav have multiple post )
  User.hasMany(Rating, { foreignKey: "userId" });
  Rating.belongsTo(User, { foreignKey: "userId" });

  // 12 Post - Direction : One-to-Many (A Post cam multiple direction)
  Post.hasMany(Direction, { foreignKey: "postId" });
  Direction.belongsTo(Post, { foreignKey: "postId" });

  //  13 Post - VideoPost : One-to-Many (A post can have many video)
  Post.hasMany(VideoPost, { foreignKey: "postId" });
  VideoPost.belongsTo(Post, { foreignKey: "postId" });

  // 14 Post - LikeDislike : One-to-many (A post can have many like and dislike)
  Post.hasMany(LikeDislike, { foreignKey: "postId" });
  LikeDislike.belongsTo(Post, { foreignKey: "postId" });

  // 15 User - likeDislike : One-to_Many (A user can like/dislike multiple post)
  User.hasMany(LikeDislike, { foreignKey: "userId" });
  LikeDislike.belongsTo(User, { foreignKey: "userId" });

  // 16 Post - Ingredients : One-to-many (A post can have many ingredients)
  Post.hasMany(Ingredients, { foreignKey: "postId" });
  Ingredients.belongsTo(Post, { foreignKey: "postId" });

  // 17 Post - MediaGallery
  Post.hasMany(MediaGallery, { foreignKey: "postId" });
  MediaGallery.belongsTo(Post, { foreignKey: "postId" });

  // 18 Post - PostView : One-to-many
  Post.hasMany(PostView, { foreignKey: "postId" });
  PostView.belongsTo(Post, { foreignKey: "postId" });

  // 19 User - PostView : One-to-many
  User.hasMany(PostView, { foreignKey: "userId" });
  PostView.belongsTo(User, { foreignKey: "userId" });

  // User - Post : One-to-Many (A user can have multiple posts)
  User.hasMany(Post, { foreignKey: "userId" });
  Post.belongsTo(User, { foreignKey: "userId" });

  // Post - VideoPost : One-to-many
  Post.hasMany(VideoPost, { foreignKey: "postId" });
  VideoPost.belongsTo(Post, { foreignKey: "postId" });
};
module.exports = defineAssociations;
