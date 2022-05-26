const {ProfileSubject} = require('../models/models')
const ApiError = require('../error/ApiError')
const sequelize = require('../db')
class InfoController {

  async calculateChances (req, res) {
    const {s1, s2, p} = req.query
    const q = req.query.q === 'true'
    const query = 'select chance.edu_prog_id, chance_n, chance_status, edu_prog_name, count_grant_2022, min_point_state_gr_state_quota,min_point_state_gr_rural_quota, min_point_target_gr_state_quota, min_point_target_gr_rural_quota   from subject inner join chance on subject.edu_prog_id = chance.edu_prog_id inner join general_information on chance.edu_prog_id = general_information.edu_prog_id inner join group_educational_program on chance.edu_prog_id = group_educational_program.edu_prog_id where (((subject.profile_subject_1 = :s1 and subject.profile_subject_2 = :s2) or (subject.profile_subject_1 = :s2 and subject.profile_subject_2 = :s1)) and unt_score = :p and quota_type = :q) order by chance.chance_n desc, min_point_state_gr_state_quota desc, min_point_state_gr_rural_quota desc'
    const [results, metadata] = await sequelize.query(query, {
        replacements: {
          s1, s2, p, q: q ? 'Сельская квота' : 'Общий конкурс'
        }
      }
    )
    return res.json(results)
  }

  async getGeneralInfo (req, res) {
    const { id } = req.params
    const  query = 'select distinct edu_prog_name, group_educational_program.edu_prog_id, profile_subject_1, profile_subject_2, field_education, subfield_education, count_grant_2021, count_grant_2022, min_point_state_gr_state_quota, min_point_state_gr_rural_quota, min_point_target_gr_state_quota, min_point_target_gr_rural_quota from general_information full join stat_by_group_educ_program on general_information.edu_prog_id = stat_by_group_educ_program.edu_prog_id inner join group_educational_program on group_educational_program.edu_prog_id = general_information.edu_prog_id where group_educational_program.edu_prog_id = :id'
    const [results, metadata] = await sequelize.query(query, {
      replacements: {
        id
      },
    })
    return res.json(results)
  }
  async uniInfo (req, res) {
    const { id } = req.params
    const {grantType} = req.query
    const query = 'select * from stat_by_group_educ_program inner join university on university.university_id = stat_by_group_educ_program.university_id where edu_prog_id  = :id and strpos(grant_type, :tag_name) > 0'
    const [results, metadata] = await sequelize.query(query, {
      replacements: {
        id,
        tag_name: grantType==='state'?'Общий грант':'Целевой грант'
      },
    })
    return res.json(results)
  }
  async getAllSpecialities (req, res) {
    let {limit = 5, page = 1} = req.query
    let offset = page * limit - limit
    const query = 'select group_educational_program.edu_prog_name, group_educational_program.edu_prog_id, count_grant_2022, min_point_state_gr_state_quota, min_point_state_gr_rural_quota from group_educational_program inner join general_information on group_educational_program.edu_prog_id = general_information.edu_prog_id'
    const [results, metadata] = await sequelize.query(query, {})

    return res.json({...results})
  }
  async getAllEduProgs (req, res) {
    const query = 'select speciality.edu_prog_id, speciality_name, edu_prog_name, profile_subject_1, profile_subject_2 from speciality inner join group_educationaL_program on speciality.edu_prog_id = group_educationaL_program.edu_prog_id inner join subject on subject.edu_prog_id = speciality.edu_prog_id'
    const [results, metadata] = await sequelize.query(query, {})

    return res.json({...results})
  }
  async getOtherSpecialities (req, res) {
    let { id } = req.params
    const query = 'select * from speciality where edu_prog_id  = :id'
    const [results, metadata] = await sequelize.query(query, {
      replacements: {
        id
      }
    })
    return res.json(results)
  }
  async getSubjects (req, res) {
    const results = await ProfileSubject.findAll()
    return res.json(results)
  }
}
module.exports = new InfoController()