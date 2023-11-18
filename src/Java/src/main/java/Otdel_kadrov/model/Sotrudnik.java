package Otdel_kadrov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудник
 */
@Entity(name = "IISOtdel_kadrovСотрудник")
@Table(schema = "public", name = "Сотрудник")
public class Sotrudnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDдолжности")
    private String idдолжности;

    @Column(name = "IDПодразделения")
    private String idподразделения;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Podrazdeleniya")
    @Convert("Podrazdeleniya")
    @Column(name = "Подразделения", length = 16, unique = true, nullable = false)
    private UUID _podrazdeleniyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Podrazdeleniya", insertable = false, updatable = false)
    private Podrazdeleniya podrazdeleniya;


    public Sotrudnik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getIDдолжности() {
      return idдолжности;
    }

    public void setIDдолжности(String idдолжности) {
      this.idдолжности = idдолжности;
    }

    public String getIDПодразделения() {
      return idподразделения;
    }

    public void setIDПодразделения(String idподразделения) {
      this.idподразделения = idподразделения;
    }


}