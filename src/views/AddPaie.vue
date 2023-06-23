<template>
  <div class="bodyBox">
    <div class="TheBoxBody">

       <!-- LISTE EMPLOYER -->
      <v-dialog v-model="showemploye" max-width="370">
      <v-card>
          <v-card-text>
          <v-container>
              <div class="editIMGO">
              <p style="text-align:center; font-weight:bold">CHOISIR UN SALARIER</p>
              </div>
              <v-container fluid class="addcongeAsk">
              <v-row>
                <v-col cols="12" md="12" lg="12" v-for="(item) in Employers" :key="item.index" style="display:flex; justify-content:center;">
                  <div class="user_box" @click="chooseSalared(item)">
                      <img v-if="item.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${item.avatar}`"/>
                      <img v-if="!item.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                      <div class="user_info">
                        <p>{{item.nom}} {{item.prenoms}}</p>
                        <p>{{item.nom_fonction}}</p>
                      </div>
                  </div>
                </v-col>
              </v-row>  
            </v-container>
          </v-container>
          </v-card-text>

      </v-card>
      </v-dialog>

      <!-- FICHE PAIE EMPLOYER -->
      <v-dialog
      v-model="showpaieFile"
      width="1000"
      overlay-color="black"
      overlay-opacity="0.8"
      mainBlueColor
      
    >
      <v-card tile>
        <v-card-text>
          <v-container  id="maketopdf">
            <v-row class="detailsTemplate">
              <div class="headerOne">
                <div class="infoEntreprise">
                  <!-- <img src="@/assets/img/avatarProfil.jpg" alt="" srcset=""> -->
                  <p>{{CompagnieInfos.Denomination}} ({{CompagnieInfos.Anagramme}})</p>
                  <p>{{CompagniePaieConfig.boite_postale}} </p>
                  <p>{{CompagnieInfos.Ville}}, {{CompagniePaieConfig.commune}}, {{CompagniePaieConfig.quartier}}</p>
                  <p>ILOT {{CompagniePaieConfig.ilot}}</p>
                  <p>{{CompagniePaieConfig.forme_juridique}}</p>
                  <p>Tel : {{CompagniePaieConfig.contact}}</p>
                  <p>{{CompagniePaieConfig.service_impot}}</p>
                  <p>N°CC: {{CompagniePaieConfig.cc}}</p>
                  <p>N°CNPS: {{CompagniePaieConfig.cnps}} | code ets: {{CompagniePaieConfig.code_ets}} |code ativite: {{CompagniePaieConfig.code_activ}}</p>
                </div>
                <div class="infopaie">
                  <h2>BULLETIN DE PAIE</h2>
                  <p>{{dataToEdit.periode_paie}}</p>
                  <p>mois| Année</p>
                </div>
              </div>
              <div class="headerTwo">
                <div class="infoEmployer">
                  <p><span>matricule:</span> {{dataToEdit.matricule}} </p>
                  <p><span>service:</span> {{SalaredChoosen.nom_departement}}</p>
                  <p><span>emploi:</span> {{SalaredChoosen.nom_fonction}}</p>
                  <p><span>categorie:</span>  {{dataToEdit.categorie}} </p>
                  <p><span>Part IGR:</span>  {{dataToEdit.part_igr}} </p>
                  <p><span>CNPS N°:</span>  {{dataToEdit.numero_cnps}} </p>
                  <p><span>DATE ENTRE:</span> {{SalaredChoosen.created_at}}</p>
                  <p><span>Aciennete:</span> {{dataToEdit.anciennete}}</p>
                </div>
                <div class=" Employer">
                  <p>{{dataToEdit.civilite}} {{SalaredChoosen.nom}} {{SalaredChoosen.prenoms}}</p>
                  <p>{{SalaredChoosen.lieu_naissance}} </p>
                </div>
              </div>
            </v-row>
            <v-row justify="end" style="margin-top:20px;">
              <v-col cols="12" md="5" lg="5" style="text-align:center; background:#69798c0f; font-weight:bold">PART SALARIALE</v-col>
              <v-col cols="12" md="3" lg="3" style="text-align:center; background:#69798C3D; font-weight:bold">PART PATRONALE</v-col>
            </v-row>
            <v-row style="font-weight:bold;">
              <v-col cols="12" md="2" lg="2" style="text-align:center; background:#69798c0f;">DESIGNATION</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; background:#69798c0f;">BASE</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; background:#69798c0f;">TAUX</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; background:#69798c0f;">GAIN</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; background:#69798c0f;">RETENUE</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; background:#69798c0f;">TAUX</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; background:#69798c0f;">RETENUE</v-col>
            </v-row>


            <v-row style="font-size:11.5px">
              <v-col cols="12" md="2" lg="2" style="text-align:left; ">SALAIRE CATEGORIEL</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L1_C2}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L1_C3}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L1_C4}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L1_C5}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L1_C6}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L1_C7}}</v-col>
            </v-row>
            <v-row style="font-size:11.5px">
              <v-col cols="12" md="2" lg="2" style="text-align:left; ">SURSALAIRE</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L2_C2}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L2_C3}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L2_C4}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L2_C5}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L2_C6}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L2_C7}}</v-col>
            </v-row>
            <v-row style="font-size:11.5px">
              <v-col cols="12" md="2" lg="2" style="text-align:left; ">PRIME D'ANCIENNETE</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L3_C2}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L3_C3}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L3_C4}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L3_C5}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L3_C6}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L3_C7}}</v-col>
            </v-row>
            <v-row style="font-size:11.5px">
              <v-col cols="12" md="2" lg="2" style="text-align:left; ">PRIME DE TRANSPORT</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L4_C2}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L4_C3}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L4_C4}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L4_C5}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L4_C6}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L4_C7}}</v-col>
            </v-row>
            <v-row style="font-size:11.5px">
              <v-col cols="12" md="2" lg="2" style="text-align:left; ">FORFAIT HEURE SUPPLEMENTAIRE</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L5_C2}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L5_C3}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L5_C4}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L5_C5}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L5_C6}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L5_C7}}</v-col>
            </v-row>
            <v-row style="font-size:11.5px">
              <v-col cols="12" md="2" lg="2" style="text-align:left; ">GRATIFICATION</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L6_C2}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L6_C3}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L6_C4}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L6_C5}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L6_C6}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L6_C7}}</v-col>
            </v-row>
            <v-row style="font-size:11.5px">
              <v-col cols="12" md="2" lg="2" style="text-align:left; ">CONGE</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L6_C2}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L6_C3}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L6_C4}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L6_C5}}</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">{{salaryDetails.L6_C6}}</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">{{salaryDetails.L6_C7}}</v-col>
            </v-row>

            <v-row style="font-size:11.5px; font-weight:bold">
              <v-col cols="12" md="2" lg="2" style="text-align:left; background:#69798c0f;">TOTAL BRUTE</v-col>
              <v-col cols="12" md="2" lg="4" style="text-align:center; background:#69798c0f;"></v-col>
              <v-col cols="12" md="1" lg="2" style="text-align:LEFT; background:#69798c0f;">{{salaryDetails.L7_C3}}</v-col>
              <v-col cols="12" md="2" lg="1" style="text-align:center; "></v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; "></v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; "></v-col>
            </v-row>
            <v-row style="font-size:11.5px; font-weight:bold">
              <v-col cols="12" md="2" lg="2" style="text-align:left; background:#69798c0f;">TOTAL BRUTE</v-col>
              <v-col cols="12" md="2" lg="4" style="text-align:center; background:#69798c0f;"></v-col>
              <v-col cols="12" md="1" lg="2" style="text-align:LEFT; background:#69798c0f;">{{salaryDetails.L8_C3}}</v-col>
              <v-col cols="12" md="2" lg="1" style="text-align:center; "></v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; "></v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; "></v-col>
            </v-row>

            <v-row style="font-size:11.5px">
              <v-col cols="12" md="2" lg="2" style="text-align:left; ">IMP.SUR.TRAIT.ET.SAL (IS)</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">500000</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">30,00</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">0</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">2500</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">1,5</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">5236</v-col>
            </v-row>
            <v-row style="font-size:11.5px">
              <v-col cols="12" md="2" lg="2" style="text-align:left; ">CONTRIBUTION NATIONNALE (CN)</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">500000</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">30,00</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; ">10000</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; ">25600</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; "></v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:center; "></v-col>
            </v-row>

            <v-row style="font-size:11.5px; font-weight:bold; margin-top:30px">
              <v-col cols="12" md="2" lg="2" style="text-align:left;"></v-col>
              <v-col cols="12" md="2" lg="3" style="text-align:center;"></v-col>
              <v-col cols="12" md="1" lg="2" style="text-align:RIGHT; background:#69798c0f;">1122000</v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:CENTER; background:#69798c0f;">25555555</v-col>
              <v-col cols="12" md="1" lg="1" style="text-align:center; "></v-col>
              <v-col cols="12" md="2" lg="2" style="text-align:RIGHT;  background:#69798c0f;">146798999</v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" lg="12" style="text-align:right; background:#69798C3D; font-weight:bold">
               <span style="font-size:12px">NET A PAYE :</span> {{dataToEdit.salaire}}
              </v-col>
            </v-row>
            <v-row style="font-size:11px; margin-top:30px" justify="space-around">
              <v-col cols="12" md="3" lg="3" style="text-align:center;">
                <b>MODE DE PAIEMENT</b> <br>{{dataToEdit.mode_paiement}}
              </v-col>
              <v-col cols="12" md="3" lg="3" style="text-align:center;">
                <b>DATE DE PAIE</b> <br>{{dataToEdit.date_paie}}
              </v-col>
            </v-row>
            <v-row style="font-size:11.5px; margin-top:30px">
              <v-col cols="12" md="12" lg="12" style="text-align:center;">
                Pour vous aider à faire valoir vos droits, conservez ce bulletin de paie sans limitation de durée.
              </v-col>
            </v-row>
          
          </v-container>
        </v-card-text>
        <v-card-actions>
            <v-row justify="center">
              <v-col cols="12" md="5" lg="5" style="text-align:right; background:#69798c0f; font-weight:bold; display:flex; justify-content:center">
                <p
                  class="simplex-btn simplex-submit-btn"
                  style="padding:14px 19px;"
                  @click="exportPaieFile"
                  >Generer la fiche</p
                >
              </v-col>
            </v-row>
          </v-card-actions>
      </v-card>
    </v-dialog>


      <div class="sectionTitle">
        <p>Elaborer fiche de paie</p>
        <p
          class="simplex-btn"
          style=""
          @click="showemploye = true"
          >choisir salarier</p
        >
      </div>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="12" lg="12">
            <div class="numberWrapper ">
              <v-form ref="form1">
                <v-container fluid class="PaieformBox">
                  <v-container fluid>
                    <div>
                    <v-row justify="end" style="margin-bottom:15px">
                      <v-col cols="12" md="5" lg="5" style="text-align:right; background:#69798c0f; font-weight:bold">INFORMATION SALARIER</v-col>
                    </v-row>
                    </div>
                    <v-row justify="end" style="margin-bottom:15px">
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="CIVILITE"
                            append-icon="mdi-account"
                            v-model="dataToEdit.civilite"
                            :rules="[() => !!dataToEdit.civilite]"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="MATRICULE"
                            v-model="dataToEdit.matricule"
                            :rules="[() => !!dataToEdit.matricule]"
                            append-icon="mdi-matrix"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="SEXE"
                            v-model="dataToEdit.sexe"
                            :rules="[() => !!dataToEdit.sexe]"
                            append-icon="mdi-gender-male-female"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="PART IGR"
                            v-model="dataToEdit.part_igr"
                            :rules="[() => !!dataToEdit.part_igr]"
                            append-icon="mdi-square-opacity"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="CATEGORIE"
                            v-model="dataToEdit.categorie"
                            :rules="[() => !!dataToEdit.categorie]"
                            append-icon="mdi-ab-testing"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="NUMERO CNPS"
                            v-model="dataToEdit.numero_cnps"
                            :rules="[() => !!dataToEdit.numero_cnps]"
                            append-icon="mdi-call-merge"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="ANCIENNETE"
                            v-model="dataToEdit.anciennete"
                            :rules="[() => !!dataToEdit.anciennete]"
                            append-icon="mdi-timer-sand"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="SALAIRE"
                            v-model="dataToEdit.salaire"
                            :rules="[() => !!dataToEdit.salaire]"
                            append-icon="mdi-cash"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>

                    </v-row>
                  </v-container>
                  <v-container fluid>
                    <v-row justify="end">
                      <v-col cols="12" md="5" lg="5" style="text-align:right; background:#69798c0f; font-weight:bold">DETAILS PAIEMENT</v-col>
                    </v-row>
                    <v-row justify="end" style="margin-bottom:15px">
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            v-model="dataToEdit.periode_paie"
                            :rules="[() => !!dataToEdit.periode_paie]"
                            label="PERIODE DE PAIEMENT"
                            append-icon="mdi-timeline-clock"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="date"
                            v-model="dataToEdit.date_paie"
                            :rules="[() => !!dataToEdit.date_paie]"
                            label="DATE DE PAIEMENT"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4" lg="4">
                        <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            v-model="dataToEdit.mode_paiement"
                            :rules="[() => !!dataToEdit.mode_paiement]"
                            label="MODE DE PAYEMENT"
                            append-icon="mdi-cash-register"
                            persistent-hint
                            required
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="" lg="6">
                        <v-file-input
                          chips
                          height="40"
                          solo
                          label="FICHE DE PAIE"
                          ref="paie_file"
                          v-model="dataToEdit.fiche_paie"
                            :rules="[() => !!dataToEdit.fiche_paie]"
                          prepend-icon="mdi-file-account"
                          required
                        ></v-file-input>
                      </v-col>

                    </v-row>
                  </v-container>
                  <v-container fluid class="">
                    <v-row justify="end">
                      <v-col cols="12" md="5" lg="5" style="text-align:right; background:#69798c0f; font-weight:bold">PART SALARIALE</v-col>
                      <v-col cols="12" md="3" lg="3" style="text-align:right; background:#69798C3D; font-weight:bold">PART PATRONALE</v-col>
                    </v-row>
                    <v-row style="height:65px">
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="DESIGNATION"
                            value="Salaire catégoriel"
                            disabled
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="BASE"
                            persistent-hint
                            v-model="salaryDetails.L1_C2"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L1_C3"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="GAINS"
                            v-model="salaryDetails.L1_C4"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L1_C5"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L1_C6"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L1_C7"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row  style="height:65px">
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            value="Sursalaire"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="BASE"
                            v-model="salaryDetails.L2_C2"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L2_C3"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="GAINS"
                            v-model="salaryDetails.L2_C4"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L2_C5"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            v-model="salaryDetails.L2_C6"
                            type="text"
                            label="00"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L2_C7"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row style="height:65px">
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            value="Prime d'ancienneté"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="BASE"
                            v-model="salaryDetails.L3_C2"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L3_C3"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="GAINS"
                            v-model="salaryDetails.L3_C4"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L3_C5"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L3_C6"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L3_C7"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row  style="height:65px">
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            value="Prime de transport"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="BASE"
                            v-model="salaryDetails.L4_C2"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L4_C3"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="GAINS"
                            v-model="salaryDetails.L4_C4"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L4_C5"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L4_C6"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L4_C7"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row style="height:65px">
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            value="forfait heure supplementaire"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="BASE"
                            v-model="salaryDetails.L5_C2"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            v-model="salaryDetails.L5_C3"
                            ref="dep_date"
                            type="text"
                            label="00"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            v-model="salaryDetails.L5_C4"
                            type="text"
                            label="GAINS"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            v-model="salaryDetails.L5_C5"
                            type="text"
                            label="RETENUE"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            v-model="salaryDetails.L5_C6"
                            label="00"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            v-model="salaryDetails.L5_C7"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row  style="height:65px">
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            value="Gratification"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="BASE"
                            v-model="salaryDetails.L6_C2"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            v-model="salaryDetails.L6_C3"
                            label="00"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="GAINS"
                            v-model="salaryDetails.L6_C4"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L6_C5"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L6_C6"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L6_C7"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row style="height:65px">
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            value="Congé"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="BASE"
                            v-model="salaryDetails.L7_C2"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            v-model="salaryDetails.L7_C3"
                            label="00"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            v-model="salaryDetails.L7_C4"
                            label="GAINS"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L7_C5"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L7_C6"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L7_C7"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row  style="height:65px">
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            value="TOTAL BRUTE"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="BASE"
                            v-model="salaryDetails.L8_C2"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L8_C3"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="GAINS"
                            v-model="salaryDetails.L8_C4"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L8_C5"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L8_C6"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L8_C7"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row style="height:65px">
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            value="BRUTE FISCALE"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="BASE"
                            v-model="salaryDetails.L9_C2"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L9_C3"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="GAINS"
                            v-model="salaryDetails.L9_C4"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L9_C5"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L9_C6"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L9_C7"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row  style="height:65px">
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            value="BRUTE SOCIAL"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="BASE"
                            v-model="salaryDetails.L10_C2"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L10_C3"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="GAINS"
                            v-model="salaryDetails.L10_C4"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L10_C5"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="1" lg="1">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="00"
                            v-model="salaryDetails.L10_C6"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" lg="2">
                          <v-text-field
                            solo
                            height="40"
                            ref="dep_date"
                            type="text"
                            label="RETENUE"
                            v-model="salaryDetails.L10_C7"
                            persistent-hint
                          ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  
                  <v-container fluid>
                    <v-row justify="space-between" style="margin-top:50px">
                      <v-col cols="12" md="5" lg="5" style="text-align:right; background:#69798c0f; font-weight:bold; display:flex; justify-content:center">
                        <p
                          class="simplex-btn simplex-submit-btn"
                          style="padding:14px 19px;"
                          @click="submit1"
                          >Enregister</p
                        >
                      </v-col>
                      <v-col cols="12" md="5" lg="5" style="text-align:right; background:#69798c0f; font-weight:bold; display:flex; justify-content:center">
                        <p
                          class="simplex-btn simplex-submit-btn"
                          style="padding:14px 19px;"
                          @click="showpaieFile = !showpaieFile"
                          >Voir l'aperçu de la fiche</p
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-container>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <transition name="slide">
      <v-alert
        v-if="addingSuccess"
        elevation="13"
        type="success"
        max-width="300"
        class="alert"
        color="mainBlueColor"
      >
        Fiche enregistrée</v-alert
      >
    </transition>
    <transition name="slide">
      <v-alert
        v-if="addingfalse"
        elevation="13"
        type="error"
        max-width="300"
        class="alert"
        color="error"
      >
        Echec d'enregistrement</v-alert
      >
    </transition>
  </div>
</template>



<script>

// import Vue from "vue";npm i 
import axios from "axios";
import { mapGetters } from "vuex";

import jsPDF  from "jspdf";
import html2canvas from "html2canvas";


export default {
  name: "AddPaie",
  components: {
  },

  data: () => ({
    // FOR FORM SENDING
    new_conge_ask: {
      compagnie_id:"",
      id_user:"",
      id_departement:"",
      },

    congeAskaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    // LISTE EMPLOYE
    showemploye: false,
    SalaredChoosen:"",
    // FICHE DE PAIE
    dataToEdit:"",
    showpaieFile : false,

    salaryDetails:{
      L1_C2:"", L1_C3:"", L1_C4:"", L1_C5:"", L1_C6:"", L1_C7:"",
      L2_C2:"", L2_C3:"", L2_C4:"", L2_C5:"", L2_C6:"", L2_C7:"",
      L3_C2:"", L3_C3:"", L3_C4:"", L3_C5:"", L3_C6:"", L3_C7:"",
      L4_C2:"", L4_C3:"", L4_C4:"", L4_C5:"", L4_C6:"", L4_C7:"",
      L5_C2:"", L5_C3:"", L5_C4:"", L5_C5:"", L5_C6:"", L5_C7:"",
      L6_C2:"", L6_C3:"", L6_C4:"", L6_C5:"", L6_C6:"", L6_C7:"",
      L7_C2:"", L7_C3:"", L7_C4:"", L7_C5:"", L7_C6:"", L7_C7:"",
      L8_C2:"", L8_C3:"", L8_C4:"", L8_C5:"", L8_C6:"", L8_C7:"",
      L9_C2:"", L9_C3:"", L9_C4:"", L9_C5:"", L9_C6:"", L9_C7:"",
      L10_C2:"", L10_C3:"", L10_C4:"", L10_C5:"", L10_C6:"", L10_C7:"",
    },
  }),

  methods: {

   async exportPaieFile(){

        //Downloading
        var downloading = document.getElementById("maketopdf");
        var doc = new jsPDF('p', 'pt');
        await html2canvas(downloading, {}).then((canvas) => {
            doc.addImage(canvas.toDataURL("image/jpeg"), 'PNG', 30, 5, 525, 750);
        })
        doc.save(`${this.SalaredChoosen.nom} ${this.SalaredChoosen.prenoms} -- ${this.dataToEdit.periode_paie}`);

        //End of downloading
        document.getElementById("downloadButton").innerHTML = "Click to download";

    },

    chooseSalared(item){
       this.SalaredChoosen = item
       this.showemploye = false

       this.$store.dispatch("init_user_paie_config", this.SalaredChoosen.the_user_id)
      if (this.UserPaieConfig  !== "") {
          setTimeout(() => {
            this.dataToEdit = this.UserPaieConfig
          }, 500);
       }else{
        this.dataToEdit = {
              civilite:"0", matricule:"", sexe:"",
              part_igr:"", categorie:"", numero_cnps:"",
              anciennete:"", salaire:""
            }
       }
      
    },

    submit1() {

      if (this.$refs.form1.validate()) {
         const formData = new FormData();
          formData.append('civilite', this.dataToEdit.civilite);
          formData.append('matricule', this.dataToEdit.matricule);
          formData.append('sexe', this.dataToEdit.sexe);
          formData.append('part_igr', this.dataToEdit.part_igr);
          formData.append('categorie', this.dataToEdit.categorie);
          formData.append('numero_cnps', this.dataToEdit.numero_cnps);
          formData.append('anciennete', this.dataToEdit.anciennete);
          formData.append('salaire', this.dataToEdit.Salaire);

          formData.append('periode_paie', this.dataToEdit.periode_paie);
          formData.append('date_paie', this.dataToEdit.date_paie);
          formData.append('mode_paiement', this.dataToEdit.mode_paiement);
          formData.append('fiche_paie', this.dataToEdit.fiche_paie);

          formData.append('id_user', this.SalaredChoosen.the_user_id);
          // console.log(formData);
        axios({ url: "/api/v1/admin/strorePaiefile", data: formData, method: "POST" })
        .then((response) => {
          this.congeAskaAddingResponse = response.data;
          // console.log(response.data);
          if (this.congeAskaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
            }, 3000);
         this.$refs.form1.reset();
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.congeAskaAddingResponse = error.message;
          console.error("There was an error!", error);
        });
      }
        
    },

  },

  computed: {
    ...mapGetters(["Employers", "UserPaieConfig", "CompagniePaieConfig", "CompagnieInfos"]),
  },

  created() {
    this.$store.dispatch("init_employers")
    this.$store.dispatch("init_compagnie_paie_config");
    this.$store.dispatch("init_compagnie_info");
    this.new_conge_ask.compagnie_id = localStorage.getItem("user-compagnie");
    this.new_conge_ask.id_user = localStorage.getItem("user-id");
   
  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-left: 15px;
  margin-top:-10px;
  margin-bottom: -10px;
  font-size: 15px;
  /* background:red; */
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}
.numberWrapper {
  border-radius: 10px;
  background: white;
}
/* ,
.middleBox {
  height:58vh;
} */
.addcongeAsk {
  height: 55vh;
  overflow-y: auto;
  /* background-color:red; */
}
.addcongeAsk::-webkit-scrollbar {
  width: 7px;
}
.addcongeAsk::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.addcongeAsk::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 1px solid rgb(255, 255, 255);
}

.user_box{
  height:10vh;
  background:#356eea24;
  width:90%;
  border-radius:7px;
  display:flex;
  align-items:center;
  cursor: pointer;
}
.user_box img {
  height: 40px;
  width:40px;
  margin-right:7px;
  margin-left:7px;
  border-radius: 100px;
  border: solid 2px;
  border-color: var(--main-blue-important);
}
.user_info{
  /* background:yellow; */
  height:100%;
  margin-right:7px;
  font-size:8px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.user_info > p:nth-child(1){
  font-size:12px;
  margin-bottom:-12px;
  font-weight:bold;
}




/* FOR THE FORM */
.PaieformBox {
  background: white;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
  overflow-y: auto;
}
.col-lg-4,
.col-md-4 {
  padding-bottom: 0px;
}



/* PAIE FILE STYLE */
.headerOne{
  margin-top:15px;
  width:100%;
  display: flex;
  justify-content:space-between;
}
.infoEntreprise{
  border: solid 1px grey;
  border-radius: 5px;
  width: 50%;
  padding:10px;
}
.infoEntreprise p{
  text-transform: uppercase;
  font-size:11px;
  line-height:3px;
}
.infopaie p{
  text-align: center;
  font-size:12.5px;
  line-height:3px;
  text-transform: uppercase;
}

.headerTwo{
  margin-top:15px;
  width:100%;
  display: flex;
}
.infoEmployer{
  width: 50%;
  padding:10px;
}
.infoEmployer p{
  text-transform: uppercase;
  font-size:11px;
  line-height:3px;
}
.infoEmployer p > span{
  font-weight:bold
}
.Employer{
  text-transform: uppercase;
  font-size:12px;
  font-weight:bold;
  line-height:1px;
  padding:10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Employer p:nth-child(2){
  text-transform: uppercase;
  font-size:11px;
  font-weight:normal;
}








@media (min-width: 960px) {
  .col-md-12 {
    height: 85px;
    margin-bottom: -10px;
  }
}
/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1264px){
  .addcongeAsk {
    height: 57vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    width: 100%;
  } 
}
</style>
