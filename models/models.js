const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const EducationProgramGroup = sequelize.define('group_educational_program', {
  edu_prog_id: {type: DataTypes.STRING, allowNull: false},
  edu_prog_name: {type: DataTypes.STRING}
}, {
  freezeTableName: true
})
const ProfileSubject = sequelize.define('profile_subject', {
  id: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
  subject_name_ru: {type: DataTypes.STRING, allowNull: false},
  subject_name_kz: {type: DataTypes.STRING, allowNull: false}
}, {
  freezeTableName: true,
  timestamps: false
})

const Subject  = sequelize.define('subject', {
  edu_prog_id: {type: DataTypes.STRING, allowNull: false},
  profile_subject_1: {type: DataTypes.STRING, allowNull: false},
  profile_subject_2: {type: DataTypes.STRING, allowNull: false},
  grant_for_rural_quota: {type: DataTypes.BOOLEAN, defaultValue: false}
}, {
  freezeTableName: true
})

const Chance = sequelize.define('chance', {
  unt_score: {type: DataTypes.INTEGER},
  edu_prog_id: {type: DataTypes.STRING, allowNull: false},
  quota_type: {type: DataTypes.STRING},
  chance_n: {type: DataTypes.INTEGER},
  chance_status: {type: DataTypes.STRING},
}, {
  freezeTableName: true
})

const Speciality  = sequelize.define('speciality', {
  edu_prog_id: {type: DataTypes.STRING, allowNull: false},
  speciality_name: {type: DataTypes.STRING, allowNull: false}
}, {
  freezeTableName: true
})

const GeneralInformation = sequelize.define('general_information', {
  edu_prog_id: {type: DataTypes.STRING, allowNull: false},
  profile_subject_1: {type: DataTypes.STRING, allowNull: false},
  profile_subject_2: {type: DataTypes.STRING, allowNull: false},
  state_grant_allocated: {type: DataTypes.STRING},
  field_education: {type: DataTypes.STRING},
  subfield_education: {type: DataTypes.STRING},
  count_grant_2021: {type: DataTypes.INTEGER},
  count_grant_2022: {type: DataTypes.INTEGER},
  min_point_state_gr_state_quota: {type: DataTypes.STRING},
  min_point_state_gr_rural_quota: {type: DataTypes.STRING},
  target_grant_in_state_grant: {type: DataTypes.STRING},
  min_point_target_gr_state_quota: {type: DataTypes.STRING},
  min_point_target_gr_rural_quota: {type: DataTypes.STRING},
}, {
  freezeTableName: true
})

const University  = sequelize.define('university', {
  university_id: {type: DataTypes.INTEGER, allowNull: false},
  university_name: {type: DataTypes.STRING}
}, {
  freezeTableName: true
})
const EducationalProgramGroupsStats = sequelize.define('stat_by_group_educ_program', {
  edu_prog_id: {type: DataTypes.STRING, allowNull: false},
  university_id: {type: DataTypes.INTEGER, allowNull: false},
  count_enrollment: {type: DataTypes.INTEGER},
  count_enrollment: {type: DataTypes.INTEGER},
  count_enrollment: {type: DataTypes.INTEGER},
  count_enrollment: {type: DataTypes.INTEGER},
  grant_type: {type: DataTypes.STRING}
}, {
  freezeTableName: true
})
const Post = sequelize.define('post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT, allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    default: 'Admin'
  },
  thumbnail: {
    type: DataTypes.STRING,
  },
  isApproved: {
    type: DataTypes.BOOLEAN,
    default: false
  }
}, {
  freezeTableName: true, timestamps: false
})
const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true,},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
}, {
  freezeTableName: true, timestamps: false
})
module.exports = {
  EducationProgramGroup,
  EducationalProgramGroupsStats,
  Chance,
  GeneralInformation,
  Subject,
  Speciality,
  University,
  ProfileSubject,
  Post,
  User
}